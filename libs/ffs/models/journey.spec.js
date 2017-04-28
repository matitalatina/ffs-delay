'use strict';

const expect = require('chai').expect;
const moment = require('moment');

const Journey = require('./journey.js');
const Stop = require('./stop.js');

describe('Train', () => {
  it('should instantiate with default parameters', () => {
    let journey = new Journey({
      name: 'hello',
      to: 'destination'
    })

    expect(journey.name).to.be.equal('hello');
    expect(journey.to).to.be.equal('destination');
  });

  it('should create from FFS journey model', () => {
    let journey = Journey.fromFfsModel({
      "stop": {
        "station": {
          "id": "8502996",
          "name": "Aarau, Bahnhof",
          "score": null,
          "coordinate": {
            "type": "WGS84",
            "x": "8050864",
            "y": "47392020"
          }
        },
        "arrival": null,
        "arrivalTimestamp": null,
        "departure": "2012-03-31T14:39:00+02:00",
        "departureTimestamp": 1333197540,
        "delay": 13,
        "platform": "",
        "prognosis": {
          "platform": null,
          "arrival": null,
          "departure": null,
          "capacity1st": "-1",
          "capacity2nd": "-1"
        }
      },
      "name": "BUS13543",
      "category": "BUS",
      "number": "13543",
      "operator": null,
      "to": "Frick, Bahnhof"
    });

    expect(journey.name).to.be.equal('BUS13543');
    expect(journey.to).to.be.equal('Frick, Bahnhof');
    expect(journey.stop).to.be.an.instanceOf(Stop);
    expect(journey.stop.delay).to.be.equal(13);
  });

  it('should have hasDelay property', () => {
    let journey = new Journey({
      stop: new Stop({
        delay: 3
      })
    });

    expect(journey.hasDelay).to.be.true;
    journey.stop.delay = null;
    expect(journey.hasDelay).to.be.false;
  });

  describe('id', () => {
    it('should exist', () => {
      let journey = new Journey({
        name: 'bla',
        departure: moment().hours(3)
      });

      expect(journey.id).to.exist;
    });

    it('should be different from two different journeys', () => {
      let departure = moment()
      let journey1 = new Journey({
        name: 'bla',
        number: '14',
        stop: new Stop({
          departure: departure
        })
      });

      let journey2 = new Journey({
        name: 'bla',
        number: '14',
        stop: new Stop({
          departure: moment(departure)
        })
      });

      expect(journey1.id).to.be.equal(journey2.id);

      journey2.name = 'gne gne';

      expect(journey1.id).to.not.be.equal(journey2.id);

      journey2.name = 'bla';

      expect(journey1.id).to.be.equal(journey2.id);

      journey2.number = '12';

      expect(journey1.id).to.not.be.equal(journey2.id);

    });
  });

});
