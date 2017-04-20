'use strict';

const moment = require('moment');

class Stop {
  constructor(defaults) {
    this.departure = moment(defaults.departure);
    this.platform = defaults.platform;
    this.delay = defaults.delay;
  }

  static fromFfsModel(ffsModel) {
    return new this({
      departure: moment(ffsModel.departure),
      platform: ffsModel.platform,
      delay: ffsModel.delay
    });
  }

  get hasDelay() {
    return !!this.delay;
  }
}

module.exports = Stop;
