'use strict';

const moment = require('moment');
const DelayNotifier = require('./delay-notifier.js');
const FfsMock = require('../ffs/api.mock.js');
const config = require('./config.js');
const NotificationMock = require('../hipchat/api.mock.js').mockSendNotification;
const DelayChecker = require('../ffs/delay-checker.js');
const fixtures = require('./fixtures.spec.js');
const HipchatApi = require('../hipchat/api.js').HipchatApi;
const sinon = require('sinon');
const expect = require('chai').expect;

beforeEach(function () {
  let delayChecker = new DelayChecker();
  delayChecker.reset();
});

describe('DelayNotifier', () => {
  it('should notify if a train is late', () => {
    let dateTime = moment().format('YYYY-MM-DD HH:mm');
    const watcher = fixtures.getWatcher();
    const mockFfsStationBoard = FfsMock.mockStationBoard().query({
      station: watcher.stationName,
      limit: watcher.limitTrains,
      transportations: watcher.transportationFilter,
      datetime: dateTime
    })
      .reply(200, FfsMock.stationboardResponseWithDelay);
    const notificationMock = NotificationMock();

    return DelayNotifier.getWatcherJob(fixtures.getWatcher())({
      datetime: dateTime
    })
      .then(() => {
        mockFfsStationBoard.done();
        notificationMock.done();
      });
  });

  it('should add notificationOptions in notification', () => {
    let dateTime = moment().format('YYYY-MM-DD HH:mm');
    const watcher = fixtures.getWatcher();
    const mockFfsStationBoard = FfsMock.mockStationBoard().query({
      station: watcher.stationName,
      limit: watcher.limitTrains,
      transportations: watcher.transportationFilter,
      datetime: dateTime
    })
      .reply(200, FfsMock.stationboardResponseWithDelay);
    const notificationMock = NotificationMock();
    console.log('aaa')
    const notificationSpy = sinon.spy(HipchatApi.prototype, 'sendNotification');

    return DelayNotifier.getWatcherJob(fixtures.getWatcher())({
      datetime: dateTime
    })
      .then(() => {
        mockFfsStationBoard.done();
        notificationMock.done();
        expect(notificationSpy.args[0][1].color).to.be.equal(watcher.notificationOptions.color);
      });
  });

  it('should not notify two times the same delay', () => {
    let dateTime = moment().format('YYYY-MM-DD HH:mm');
    const watcher = fixtures.getWatcher();
    const mockFfsStationBoard = FfsMock.mockStationBoard().query({
      station: watcher.stationName,
      limit: watcher.limitTrains,
      transportations: watcher.transportationFilter,
      datetime: dateTime
    })
      .reply(200, FfsMock.stationboardResponseWithDelay);

    const notificationMock = NotificationMock();

    return DelayNotifier.getWatcherJob(watcher)({
      datetime: dateTime
    })
      .then(() => {
        mockFfsStationBoard.done();
        notificationMock.done();

        let mockFfsStationBoard2 = FfsMock.mockStationBoard().query({
          station: watcher.stationName,
          limit: watcher.limitTrains,
          transportations: watcher.transportationFilter,
          datetime: dateTime
        })
          .reply(200, FfsMock.stationboardResponseWithDelay);

        return DelayNotifier.getWatcherJob(fixtures.getWatcher())({
          datetime: dateTime
        }).then(() => {
          mockFfsStationBoard2.done();
        });
      });
  });
});
