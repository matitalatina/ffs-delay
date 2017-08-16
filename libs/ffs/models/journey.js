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

  isStoppingIn(stationNamesSubstring) {
    if (!_.isArray(stationNamesSubstring)) {
      stationNamesSubstring = [stationNamesSubstring];
    }
    stationNamesSubstring = stationNamesSubstring.map(s => s.toLowerCase());
    const stationNamesIsPassing = this.passList.map(s => (s.station.name || '').toLowerCase()).concat([this.to.toLowerCase()]);
    return !!_.find(stationNamesIsPassing,
      n => !!_.find(stationNamesSubstring, stationName => _.includes(n, stationName)));
  }
}

module.exports = Journey;
