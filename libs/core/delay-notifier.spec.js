'use strict';

const moment = require('moment');
const DelayNotifier = require('./delay-notifier.js');
const FfsMock = require('../ffs/api.mock.js');
const config = require('./config.js');
const NotificationMock = require('../hipchat/api.mock.js').mockSendNotification;
const DelayChecker = require('../ffs/delay-checker.js');

beforeEach(function () {
  let delayChecker = new DelayChecker();
  delayChecker.reset();
});

describe('DelayNotifier', () => {
  it('should notify if a train is late', () => {
    let dateTime = moment().format('YYYY-MM-DD HH:mm');
    const mockFfsStationBoard = FfsMock.mockStationBoard().query({
      station: config.stationName,
      limit: config.limitTrains,
      transportations: config.transportationFilter,
      datetime: dateTime
    })
      .reply(200, FfsMock.stationboardResponseWithDelay);
    const notificationMock = NotificationMock();

    return DelayNotifier.checkDelay({
      datetime: dateTime
    })
      .then(() => {
        mockFfsStationBoard.done();
        notificationMock.done();
      });
  });

  it('should not notify two times the same delay', () => {
    let dateTime = moment().format('YYYY-MM-DD HH:mm');
    const mockFfsStationBoard = FfsMock.mockStationBoard().query({
      station: config.stationName,
      limit: config.limitTrains,
      transportations: config.transportationFilter,
      datetime: dateTime
    })
      .reply(200, FfsMock.stationboardResponseWithDelay);

    const notificationMock = NotificationMock();

    return DelayNotifier.checkDelay({
      datetime: dateTime
    })
      .then(() => {
        mockFfsStationBoard.done();
        notificationMock.done();

        let mockFfsStationBoard2 = FfsMock.mockStationBoard().query({
          station: config.stationName,
          limit: config.limitTrains,
          transportations: config.transportationFilter,
          datetime: dateTime
        })
          .reply(200, FfsMock.stationboardResponseWithDelay);

        return DelayNotifier.checkDelay({
          datetime: dateTime
        }).then(() => {
          mockFfsStationBoard2.done();
        });
      });
  });
});
