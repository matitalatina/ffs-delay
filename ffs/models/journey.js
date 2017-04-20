'use strict';

const moment = require('moment');
const Stop = require('./stop.js');

class Journey {
  constructor(defaults) {
    defaults = defaults || {};
    this.delay = defaults.delay;
    this.name = defaults.name;
    this.to = defaults.to;
    this.stop = defaults.stop;
  }

  static fromFfsModel(ffsTrain) {
    return new this({
      stop: Stop.fromFfsModel(ffsTrain.stop),
      name: ffsTrain.name,
      to: ffsTrain.to,
    });
  }
}

module.exports = Journey;
