'use strict';

const moment = require('moment');
const DelayNotifier = require('./delay-notifier.js');
const FfsMock = require('../ffs/api.mock.js');
const sinon = require('sinon');
const NotificationMock = require('../hipchat/api.mock.js').mockSendNotification;
const DelayChecker = require('../ffs/delay-checker.js');
const fixtures = require('./fixtures.spec.js');
const HipchatApi = require('../hipchat/api.js').HipchatApi;
const SlackApi = require('../slack/api.js').SlackApi;
const config = require('./config.js');
const expect = require('chai').expect;

const sandbox = sinon.sandbox.create();
let slackPostStub;

beforeEach(function () {
  let delayChecker = new DelayChecker();
  delayChecker.reset();
});

describe('DelayNotifier', () => {
  beforeEach(function () {
    slackPostStub = sandbox.stub(SlackApi, 'sendNotification')
      .returns(Promise.resolve('ok'));
  });
  afterEach(function () {
    sandbox.restore();
  });

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
        expect(slackPostStub.called).to.be.true;
        mockFfsStationBoard.done();
        notificationMock.done();
      });
  });

  it('should not notify if a train is late and hipchat and slack are not set', () => {
    sandbox.stub(config, 'hipchatRoomId').returns(null);
    sandbox.stub(config, 'slackWebhookUrl').returns(null);
    let dateTime = moment().format('YYYY-MM-DD HH:mm');

    return DelayNotifier.getWatcherJob(fixtures.getWatcher())({
      datetime: dateTime
    })
      .then(() => {
        expect(slackPostStub.called).to.be.false;
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
    const notificationSpy = sandbox.spy(HipchatApi.prototype, 'sendNotification');

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
