'use strict';

const FfsApi = require('./ffs/api.js').FfsApi;
const HipchatApi = require('./hipchat/api.js').HipchatApi;
const stationboardOptionsFactory = require('./ffs/api.js').stationboardOptionsFactory;
const moment = require('moment');
const _ = require('lodash');
const cron = require('cron');

const hipchatRoomId = process.env.HIPCHAT_ROOM_ID;
const hipchatToken = process.env.HIPCHAT_TOKEN;

const stationName = 'Mendrisio S. Martino';
const limitTrains = 3;
const transportationFilter = ['s_sn_r', 'ec_ic'];
const timeTrain = moment().hour(17).minute(45);
const trainDestinations = ['chiasso', 'albate'];

const cronTimes = [
  //'*/10 * * * * *',
  '35-55/1 17 * * 1-5',
  '5-25/1 18 * * 1-5',
  '35-55/1 18 * * 1-5',
  '5-25/1 19 * * 1-5'
];

const timeZone = 'Europe/Rome';

function getTrainsWithDestinations(trains, destinations) {
  var destinations = destinations.map((d) => d.toLowerCase());
  return trains.filter(function (train) {
    var currentDestination = train.to.toLowerCase();
    return destinations.reduce((found, dest) => found || currentDestination.includes(dest), false);
  });
}

function checkDelay() {
  console.log('check');
  var optionsFactory = new stationboardOptionsFactory({
    station: stationName,
    limit: limitTrains,
    transportations: transportationFilter
  }).withDatetime(moment());

  new FfsApi().getStationboard(optionsFactory.getOptions())
    .then((data) => getTrainsWithDestinations(data.stationboard, trainDestinations))
    .then((trains) => trains
      .filter((t) => !!t.stop.delay)
      .map((t) => {
        var hipchatApi = new HipchatApi(hipchatToken);
        var message = `Ritardo di ${t.stop.delay} minuti. ${stationName} (${moment(t.stop.departure).format('HH:mm')}) -> ${t.to}`;
        return hipchatApi.sendNotification(hipchatRoomId, {
          from: 'FfsDelay',
          notify: true,
          message: message
        });
      })
    )
    .catch((err) => console.log(err));
}

function onStart() {
  cronTimes.forEach((cronTime) => {
    new cron.CronJob({
      cronTime: cronTime,
      onTick: checkDelay,
      start: true,
      timeZone: timeZone
    });
  });
}

onStart();