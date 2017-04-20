'use strict';

let trainDelays = {};

class DelayChecker {
  hasChange(train) {
    let trainId = train.name + train.stop.departure + train.to;
    let newDelay = train.stop.delay;
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

module.exports = DelayChecker;