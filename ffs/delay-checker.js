'use strict';

let trainDelays = {};

class DelayChecker {
  hasChange(train) {
    let trainId = train.name + train.stop.departure + train.to;
    let newDelay = train.delay;
    let hasChange = trainDelays[trainId] !== newDelay;
    
    if (hasChange) {
      trainDelays[trainId] = newDelay;
    }
    
    return hasChange;
  }
  
  reset() {
    trainDelays = {};
  }
}

var exports = module.exports = DelayChecker;