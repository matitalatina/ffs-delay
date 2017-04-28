'use strict';

const nock = require('nock');

var exports = module.exports = {};

exports.mockSendNotification = () => {
  return nock('https://api.hipchat.com:443', {
      "encodedQueryParams": true
    })
    .post('/v2/room/' + process.env.HIPCHAT_ROOM_ID + '/notification', () => true)
    .reply(200, {});
};


/* 
  nock('https://api.hipchat.com:443', {"encodedQueryParams":true})
  .post('/v2/room/123/notification', {"from":"FfsDelay","notify":true,"message":"test"})
  .reply(401, {"error":{"code":401,"message":"Invalid OAuth session","type":"Unauthorized"}}, [ 'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Date, ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-Backoff',
  'Content-Type',
  'application/json',
  'Date',
  'Fri, 28 Apr 2017 06:58:21 GMT',
  'Server',
  'nginx',
  'Content-Length',
  '104',
  'Connection',
  'Close' ]);
*/
