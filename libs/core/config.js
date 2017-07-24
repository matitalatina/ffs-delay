'use strict';

const hipchatRoomId = process.env.HIPCHAT_ROOM_ID;
const hipchatToken = process.env.HIPCHAT_TOKEN;
const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

const trainFilter = ['s_sn_r', 'ec_ic'];
const limitTrains = 3;

const mendrisioSanMartino = {
  stationName: 'Mendrisio S. Martino',
  limitTrains,
  transportationFilter: trainFilter,
  trainDestinations: ['chiasso', 'albate'],
  cronTimes: [
    //'*/5 * * * * *',
    '35-55/1 17 * * 1-5',
    '5-25/1 18 * * 1-5',
    '35-55/1 18 * * 1-5',
    '5-25/1 19 * * 1-5'
  ],
  notificationOptions: {
    color: 'yellow',
  },
};

const mendrisio = {
  stationName: 'Mendrisio',
  limitTrains,
  transportationFilter: trainFilter,
  trainDestinations: ['milano'],
  cronTimes: [
    //'*/5 * * * * *',
    '35-59/1 17 * * 1-5',
    '5-30/1 18 * * 1-5',
    '35-59/1 18 * * 1-5',
    '5-30/1 19 * * 1-5'
  ],
  notificationOptions: {
    color: 'gray',
  },
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
  slackWebhookUrl,
  limitTrains,
  timeZone,
  defaults,
  watchers,
};
