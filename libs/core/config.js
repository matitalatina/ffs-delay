'use strict';

const hipchatRoomId = process.env.HIPCHAT_ROOM_ID;
const hipchatToken = process.env.HIPCHAT_TOKEN;

const stationName = 'Mendrisio S. Martino';
const limitTrains = 3;
const transportationFilter = ['s_sn_r', 'ec_ic'];
const trainDestinations = ['chiasso', 'albate'];

const cronTimes = [
  //'*/5 * * * * *',
  '35-55/1 17 * * 1-5',
  '5-25/1 18 * * 1-5',
  '35-55/1 18 * * 1-5',
  '5-25/1 19 * * 1-5'
];

const timeZone = 'Europe/Rome';

var exports = module.exports = {};
exports.hipchatRoomId = hipchatRoomId;
exports.hipchatToken = hipchatToken;

exports.stationName = stationName;
exports.limitTrains = limitTrains;
exports.transportationFilter = transportationFilter;
exports.trainDestinations = trainDestinations;

exports.cronTimes = cronTimes;

exports.timeZone = timeZone;
