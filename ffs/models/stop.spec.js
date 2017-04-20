'use strict';

const expect = require('chai').expect;
const moment = require('moment');

const Stop = require('./stop.js');

describe('Stop model', () => {
  it('should create an instance from default values', () => {
    let departure = moment("2012-03-31T14:39:00+02:00");
    let stop = new Stop({
      departure: moment("2012-03-31T14:39:00+02:00"),
      platform: "bla"
    });
    expect(stop.departure.valueOf())
      .to.be.equal(departure.valueOf());
    expect(stop.platform).to.be.equal('bla');
  });

  it('should create an instance from ffs model', () => {
    let stop = Stop.fromFfsModel({
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
      "platform": "bla",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": "-1",
        "capacity2nd": "-1"
      }
    });

    expect(stop.departure.valueOf())
      .to.be.equal(moment("2012-03-31T14:39:00+02:00").valueOf());
    expect(stop.platform).to.be.equal('bla');
  });
});
