'use strict';

const moment = require('moment');

class Stop {
  constructor(defaults) {
    this.departure = defaults.departure ? moment(defaults.departure) : null;
    this.platform = defaults.platform;
    this.delay = defaults.delay;
    this.station = defaults.station;
  }

  static fromFfsModel(ffsModel) {
    return new this({
      departure: ffsModel.departure ? moment(ffsModel.departure) : null,
      platform: ffsModel.platform,
      delay: ffsModel.delay,
      station: ffsModel.station
    });
  }

  get hasDelay() {
    return !!this.delay;
  }
}

module.exports = Stop;
