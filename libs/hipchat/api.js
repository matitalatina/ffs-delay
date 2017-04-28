'use strict';
const request = require('request');

const RequestUtils = require('../request/utils.js').RequestUtils;

const HIPCHAT_BASE_URL = 'https://api.hipchat.com/';
const ROOM_NOTIFICATION_ENDPOINT = 'v2/room/';
const NOTIFICAITON_PARTIAL_ENDPOINT = 'notification';

class HipchatApi {
  constructor(apiKey) {
    this._apiKey = apiKey;
  }

  get apiKey() {
    return this._apiKey;
  }

  static getRoomNotificationEnpoint(roomId) {
    return HIPCHAT_BASE_URL + ROOM_NOTIFICATION_ENDPOINT + roomId + '/' + NOTIFICAITON_PARTIAL_ENDPOINT;
  }

  sendNotification(roomId, message) {
    /* Message format: https://www.hipchat.com/docs/apiv2/method/send_room_notification */
    const url = HipchatApi.getRoomNotificationEnpoint(roomId);
    //console.log('RoomId: ' + roomId, message, url)
    return RequestUtils.toJsonQ(request.post(url, {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      },
      body: message,
      json: true
    }));
  }
}

var exports = module.exports = {};
exports.HipchatApi = HipchatApi;
