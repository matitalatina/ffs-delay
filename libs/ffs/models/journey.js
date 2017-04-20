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

  static fromFfsModel(ffsJourney) {
    return new this({
      stop: Stop.fromFfsModel(ffsJourney.stop),
      name: ffsJourney.name,
      to: ffsJourney.to,
    });
  }

  get id() {
    return (this.name || '') +
      (this.stop && this.stop.departure);
  }
  get hasDelay() {
    return !!(this.stop && this.stop.delay);
  }
}

module.exports = Journey;
