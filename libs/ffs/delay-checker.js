'use strict';

let trainDelays = {};

class DelayChecker {
  hasChange(journey) {
    let journeyId = journey.id;
    let newDelay = journey.stop && journey.stop.delay;
    let hasChange = trainDelays[journeyId] != newDelay;

    if (hasChange) {
      trainDelays[journeyId] = newDelay;
    }

    return hasChange;
  }

  reset() {
    trainDelays = {};
  }
}

module.exports = DelayChecker;
