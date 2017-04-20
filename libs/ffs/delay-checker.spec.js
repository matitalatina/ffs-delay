'use strict';

const expect = require('chai').expect;

const Stop = require('./models/stop.js');
const Journey = require('./models/journey.js');
const DelayChecker = require('./delay-checker.js');

describe('DelayChecker instance', () => {
  it('should have hasChange method', () => {
    const delayChecker = new DelayChecker();

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

  it('should have reset method', () => {
    const delayChecker = new DelayChecker();

    let train = new Journey({
      name: 'gne',
      stop: new Stop({
        delay: 3
      })
    });

    let train2 = new Journey({
      name: 'asd',
      stop: new Stop({
        delay: 2
      })
    });

    expect(delayChecker.hasChange(train)).to.be.true;
    expect(delayChecker.hasChange(train)).to.be.false;
    expect(delayChecker.hasChange(train2)).to.be.true;
    delayChecker.reset();
    expect(delayChecker.hasChange(train)).to.be.true;
    expect(delayChecker.hasChange(train)).to.be.false;
    expect(delayChecker.hasChange(train2)).to.be.true;

  });
});
