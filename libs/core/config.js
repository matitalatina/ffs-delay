'use strict';

const hipchatRoomId = process.env.HIPCHAT_ROOM_ID;
const hipchatToken = process.env.HIPCHAT_TOKEN;

const trainFilter = ['s_sn_r', 'ec_ic'];
const limitTrains = 3;

const cronTimes = [
  //'*/5 * * * * *',
  '35-55/1 17 * * 1-5',
  '5-25/1 18 * * 1-5',
  '35-55/1 18 * * 1-5',
  '5-25/1 19 * * 1-5'
];

const mendrisioSanMartino = {
  stationName: 'Mendrisio S. Martino',
  limitTrains,
  transportationFilter: trainFilter,
  trainDestinations: ['chiasso', 'albate'],
  cronTimes,
};

const mendrisio = {
  stationName: 'Mendrisio S. Martino',
  limitTrains,
  transportationFilter: trainFilter,
  trainDestinations: ['chiasso', 'albate'],
  cronTimes,
};

const timeZone = 'Europe/Rome';

const defaults = {
  timeZone,
};

const watchers = [
  mendrisioSanMartino,
  mendrisio,
].map(w => Object.assign({}, w, defaults));

module.exports = {
  hipchatRoomId,
  hipchatToken,
  limitTrains,
  cronTimes,
  timeZone,
  defaults,
  watchers,
};
