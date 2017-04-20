'use strict';

const expect = require('chai').expect;

const Stop = require('./models/stop.js');
const Journey = require('./models/journey.js');
const DelayChecker = require('./delay-checker.js');

describe('DelayChecker instance', () => {
  const delayChecker = new DelayChecker();

  it('should have hasChange method', () => {
    let train = new Journey({
      name: 'gne',
      stop: new Stop({
        delay: null
      })
    });

    expect(delayChecker.hasChange(train)).to.be.false;
    expect(delayChecker.hasChange(train)).to.be.false;

    train.stop.delay = 3;
    expect(delayChecker.hasChange(train)).to.be.true;
    expect(delayChecker.hasChange(train)).to.be.false;

    train.stop.delay = null;
    expect(delayChecker.hasChange(train)).to.be.true;
    expect(delayChecker.hasChange(train)).to.be.false;
  });
});
