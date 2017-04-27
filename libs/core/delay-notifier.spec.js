'use strict';

const moment = require('moment');
const DelayNotifier = require('./delay-notifier.js');
const FfsMock = require('../ffs/api.mock.js');
const config = require('./config.js');

describe('DelayNotifier', () => {
  it('should notifiy if a train is late', () => {
    let dateTime = moment().format('YYYY-MM-DD HH:mm');
    const mockFfsStationBoard = FfsMock.mockStationBoard().query({
        station: config.stationName,
        limit: config.limitTrains,
        transportations: config.transportationFilter,
        datetime: dateTime
      })
      .reply(200, FfsMock.stationboardResponseWithDelay);

    DelayNotifier.checkDelay({
        datetime: dateTime
      })
      .then(() => {
        mockFfsStationBoard.done();
      });
  });
});
