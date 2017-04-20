'use strict';

const moment = require('moment');

class Stop {
  constructor(defaults) {
    this.departure = moment(defaults.departure);
    this.platform = defaults.platform;
  }

  static fromFfsModel(ffsModel) {
    return new this({
      departure: moment(ffsModel.departure),
      platform: ffsModel.platform
    });
  }

}

module.exports = Stop;
