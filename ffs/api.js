'use strict';

const request = require('request');
const _ = require('lodash');

function ffsApi() {
  this.BASE_PATH = 'http://transport.opendata.ch/v1/'; 
  this.STATION_BOARD_ENDPOINT = 'stationboard';
}

ffsApi.prototype.getStationboard = function (stationboard) {
  var params = {};
  
  if (_.isNumber(stationboard)) {
    params['id'] = stationboard;  
  }
  else if (_.isString(stationboard)) {
    params['station'] = stationboard;
  }
  
  return request.get(this.BASE_PATH + this.STATION_BOARD_ENDPOINT, {qs: params})
    .on('data', function (data) {
      var json = JSON.parse(data);
      console.log(json);
      return data;
    });
}

module.exports = ffsApi;