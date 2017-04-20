'use strict';

const expect = require('chai').expect;
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
  });
});
