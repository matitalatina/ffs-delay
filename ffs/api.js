'use strict';

const request = require('request');
const moment = require('moment');
const Q = require('q');

function ffsApi() {
  this.BASE_PATH = 'http://transport.opendata.ch/v1/'; 
  this.STATION_BOARD_ENDPOINT = 'stationboard';
}

ffsApi.prototype.getStationboard = function (options) {
  var deferred = Q.defer();
  request.get(this.BASE_PATH + this.STATION_BOARD_ENDPOINT, {qs: options}, deferred.makeNodeResolver());
  return deferred.promise;
}


/*** Stationboard options ***/
function stationboardOptions(options) {
  this.options = options || {};
}

stationboardOptions.prototype.withDatetime = function (date) {
  this.options.datetime = moment(date).format('YYYY-MM-DD hh:mm');
  return this;
}

stationboardOptions.prototype.withOptions = function (options) {
  this.options = _.assign(this.options, options);
  return this;
};

stationboardOptions.prototype.getOptions = function () {
  return this.options;
}

var exports = module.exports = {};
exports.ffsApi = ffsApi;
exports.stationboardOptions = stationboardOptions;
