'use strict';

const Stop = require('./stop.js');
const _ = require('lodash');

class Journey {
  constructor(defaults) {
    defaults = defaults || {};
    this.delay = defaults.delay;
    this.name = defaults.name;
    this.to = defaults.to;
    this.stop = defaults.stop;
    this.number = defaults.number;
    this.passList = defaults.passList;
  }

  static fromFfsModel(ffsJourney) {
    let passList = ffsJourney.passList || [];
    return new this({
      stop: Stop.fromFfsModel(ffsJourney.stop),
      name: ffsJourney.name,
      to: ffsJourney.to,
      number: ffsJourney.number,
      passList: passList.map(s => Stop.fromFfsModel(s))
    });
  }

  get id() {
    return (this.name || '') + this.to + this.number;
  }
  get hasDelay() {
    return !!(this.stop && this.stop.delay);
  }

  isStoppingIn(stationName) {
    return !!_.find(this.passList, s => _.includes(
      s.station.name.toLowerCase(),
      stationName.toLowerCase()
    ));
  }
}

module.exports = Journey;
