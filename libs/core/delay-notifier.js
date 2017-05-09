'use strict';

const FfsApi = require('../ffs/api.js').FfsApi;
const HipchatApi = require('../hipchat/api.js').HipchatApi;
const stationboardOptionsFactory = require('../ffs/api.js').stationboardOptionsFactory;
const moment = require('moment');
const cron = require('cron');
const Journey = require('../ffs/models/journey.js');

const delayChecker = new(require('../ffs/delay-checker.js'))();
const config = require('./config.js');

function getTrainsWithDestinations(trains, destinations) {
  destinations = destinations.map((d) => d.toLowerCase());
  return trains.filter(function (train) {
    var currentDestination = train.to.toLowerCase();
    return destinations.reduce((found, dest) => found || currentDestination.includes(dest), false);
  });
}

function checkDelay(ffsOptions) {
  var optionsFactory = new stationboardOptionsFactory({
    station: config.stationName,
    limit: config.limitTrains,
    transportations: config.transportationFilter
  })
  .withDatetime(moment())
  .withOptions(ffsOptions);

  return new FfsApi().getStationboard(optionsFactory.getOptions())
    .then((data) => {
      let journeys = data.stationboard.map((j) => Journey.fromFfsModel(j));
      return getTrainsWithDestinations(journeys, config.trainDestinations)
    })
    .then((trains) => Promise.all(trains
      .filter((t) => !!t.stop.delay && delayChecker.hasChange(t))
      .map((t) => {
        var hipchatApi = new HipchatApi(config.hipchatToken);
        var message = `Ritardo di ${t.stop.delay} minuti. ${config.stationName} (${moment(t.stop.departure).format('HH:mm')}) -> ${t.to}`;
        return hipchatApi.sendNotification(config.hipchatRoomId, {
          from: 'FfsDelay',
          notify: true,
          message: message
        });
      })))
    .catch((err) => console.log(err));
}

function start() {
  config.cronTimes.forEach((cronTime) => {
    new cron.CronJob({
      cronTime: cronTime,
      onTick: checkDelay,
      start: true,
      timeZone: config.timeZone
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
exports.checkDelay = checkDelay;
