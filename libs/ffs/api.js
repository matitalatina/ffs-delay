'use strict';

const request = require('request-promise');
const _ = require('lodash');

const RequestUtils = require('../request/utils.js').RequestUtils;


function FfsApi() {}

FfsApi.prototype.BASE_PATH = 'http://transport.opendata.ch/v1/';
FfsApi.prototype.STATION_BOARD_ENDPOINT = 'stationboard';

FfsApi.prototype.getStationboard = function (options) {
  return RequestUtils.toJson(request.get(this.BASE_PATH + this.STATION_BOARD_ENDPOINT, {
    qs: options
  }));
};


/*** Stationboard options ***/
function stationboardOptionsFactory(options) {
  this.options = options || {};
}

stationboardOptionsFactory.prototype.withDatetime = function (date) {
  this.options.datetime = date.format('YYYY-MM-DD HH:mm');
  return this;
};

stationboardOptionsFactory.prototype.withOptions = function (options) {
  this.options = _.assign(this.options, options);
  return this;
};

stationboardOptionsFactory.prototype.getOptions = function () {
  return this.options;
};

var exports = module.exports = {};
exports.FfsApi = FfsApi;
exports.stationboardOptionsFactory = stationboardOptionsFactory;
