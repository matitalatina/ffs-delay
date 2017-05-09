'use strict';

const Stop = require('./stop.js');

class Journey {
  constructor(defaults) {
    defaults = defaults || {};
    this.delay = defaults.delay;
    this.name = defaults.name;
    this.to = defaults.to;
    this.stop = defaults.stop;
    this.number = defaults.number;
  }

  static fromFfsModel(ffsJourney) {
    return new this({
      stop: Stop.fromFfsModel(ffsJourney.stop),
      name: ffsJourney.name,
      to: ffsJourney.to,
      number: ffsJourney.number
    });
  }

  get id() {
    return (this.name || '') + this.to + this.number;
  }
  get hasDelay() {
    return !!(this.stop && this.stop.delay);
  }
}

module.exports = Journey;
