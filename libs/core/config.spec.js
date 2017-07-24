const Config = require('./config.js');
const expect = require('chai').expect;

describe('Config', () => {
  it('should exist', () => {
    expect(Config).to.be.ok;
  });

  it('should have defaults property', () => {
    const defaults = Config.defaults;
    expect(defaults).to.be.a('object');
  });

  it('should have watchers', () => {
    expect(Config.watchers).to.be.a('array');
  });

  it('should have slack webhook url', () => {
    expect(Config.slackWebhookUrl).to.be.a('string');
  });

  describe('Watchers', () => {
    it('should contains defaults keys', () => {
      const defaultsKeys = Object.keys(Config.defaults);
      const watchersKeys = Config.watchers.map(w => Object.keys(w));
      watchersKeys.forEach(watcherKeys => {
        expect(watcherKeys).to.include.members(defaultsKeys);
      });
    });

    it('should contains mandatory fields', () => {
      const watchers = Config.watchers;
      watchers.forEach(watcher => {
        expect(watcher.cronTimes).to.be.a('array');
        expect(watcher.stationName).to.be.a('string');
        expect(watcher.trainDestinations).to.be.a('array');
      });
    });
  });
});