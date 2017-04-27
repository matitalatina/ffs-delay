'use strict';

const nock = require('nock');

var exports = module.exports = {};

exports.mockSendNotification = () => {
  return nock('https://api.hipchat.com')
    .post('/v2/room/' + process.env.HIPCHAT_ROOM_ID + '/notification')
    .reply(200, {});
};
