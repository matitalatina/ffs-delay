'use strict';

const request = require('request');
const moment = require('moment');
const Q = require('q');

function toJsonQ(request) {
  var deferred = Q.defer();
  var json = '';
  request
    .on('data', (data) => json += data)
    .on('error', (err) => deferred.reject(err))
    .on('end', () => deferred.resolve(json));
  return deferred.promise;
}


function ffsApi() {
  this.BASE_PATH = 'http://transport.opendata.ch/v1/'; 
  this.STATION_BOARD_ENDPOINT = 'stationboard';
}

ffsApi.prototype.getStationboard = function (options) {
  return toJsonQ(request.get(this.BASE_PATH + this.STATION_BOARD_ENDPOINT, {qs: options}));
}


/*** Stationboard options ***/
function stationboardOptionsFactory(options) {
  this.options = options || {};
}

stationboardOptionsFactory.prototype.withDatetime = function (date) {
  this.options.datetime = moment(date).format('YYYY-MM-DD hh:mm');
  return this;
}

stationboardOptionsFactory.prototype.withOptions = function (options) {
  this.options = _.assign(this.options, options);
  return this;
};

stationboardOptionsFactory.prototype.getOptions = function () {
  return this.options;
}

var exports = module.exports = {};
exports.ffsApi = ffsApi;
exports.stationboardOptionsFactory = stationboardOptionsFactory;
