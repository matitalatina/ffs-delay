'use strict';

const FfsApi = require('../ffs/api.js').FfsApi;
const HipchatApi = require('../hipchat/api.js').HipchatApi;
const SlackApi = require('../slack/api.js').SlackApi;
const stationboardOptionsFactory = require('../ffs/api.js').stationboardOptionsFactory;
const moment = require('moment');
const cron = require('cron');
const Journey = require('../ffs/models/journey.js');

const delayChecker = new (require('../ffs/delay-checker.js'))();
const config = require('./config.js');

function getWatcherJob(watcher) {
  return function checkDelay(ffsOptions) {
    var optionsFactory = new stationboardOptionsFactory({
      station: watcher.stationName,
      limit: watcher.limitTrains,
      transportations: watcher.transportationFilter
    })
      .withDatetime(moment())
      .withOptions(ffsOptions);

    return new FfsApi().getStationboard(optionsFactory.getOptions())
      .then((data) => {
        return data.stationboard.map(j => Journey.fromFfsModel(j)) || [];
      })
      .then(journeys => journeys.filter(j => j.isStoppingIn(watcher.trainDestinations)))
      .then(trains => Promise.all(trains
        .filter((t) => !!t.stop.delay && delayChecker.hasChange(t))
        .map((t) => {
          return Promise.all([
            sendHipchatNotification(watcher, t),
            sendSlackNotification(watcher, t),
          ]);
        })))
      .catch((err) => console.log(err));
  };
}

function sendHipchatNotification(watcher, train) {
  if (!config.hipchatToken || !config.hipchatRoomId) {
    return null;
  }

  var hipchatApi = new HipchatApi(config.hipchatToken);
  var message = `Ritardo di ${train.stop.delay} minuti. [${train.category}${train.number}] ${watcher.stationName} (${moment(train.stop.departure).format('HH:mm')}) -> ${train.to}`;
  const notificationOptions = Object.assign({
    from: 'FfsDelay',
    notify: true,
    message: message
  }, watcher.notificationOptions || {});
  return hipchatApi.sendNotification(config.hipchatRoomId, notificationOptions);
}

function sendSlackNotification(watcher, train) {
  if (!config.slackWebhookUrl) {
    return null;
  }

  var message = `Ritardo di ${train.stop.delay} minuti. [${train.category}${train.number}] ${watcher.stationName} (${moment(train.stop.departure).format('HH:mm')}) -> ${train.to}`;

  const notificationOptions = {
    text: message,
  };
  return SlackApi.sendNotification(config.slackWebhookUrl, notificationOptions);
}


function start() {
  config.watchers.forEach((watcher) => {
    watcher.cronTimes.forEach((cronTime) => {
      new cron.CronJob({
        cronTime: cronTime,
        onTick: getWatcherJob(watcher),
        start: true,
        timeZone: config.timeZone
      });
    });
  });


  new cron.CronJob({
    cronTime: '0 0 * * 1-5',
    onTick: () => delayChecker.reset(),
    start: true,
    timeZone: config.timeZone
  });
}

var exports = module.exports = {};
exports.start = start;
exports.getWatcherJob = getWatcherJob;
