'use strict';
const request = require('request-promise');

class SlackApi {
  static sendNotification(webhookUrl, notificationOptions) {
    /* Message format: https://api.slack.com/docs/messages */
    //console.log('RoomId: ' + roomId, message, url)
    return request.post(webhookUrl, {
      body: notificationOptions,
      json: true
    });
  }
}

var exports = module.exports = {};
exports.SlackApi = SlackApi;
