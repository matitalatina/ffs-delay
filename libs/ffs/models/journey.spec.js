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
    });

    expect(journey.name).to.be.equal('hello');
    expect(journey.to).to.be.equal('destination');
  });

  it('should create from FFS journey model', () => {
    let journey = Journey.fromFfsModel({
      'stop': {
        'station': {
          'id': '8502996',
          'name': 'Aarau, Bahnhof',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': '8050864',
            'y': '47392020'
          }
        },
        'arrival': null,
        'arrivalTimestamp': null,
        'departure': '2012-03-31T14:39:00+02:00',
        'departureTimestamp': 1333197540,
        'delay': 13,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': '-1',
          'capacity2nd': '-1'
        }
      },
      'name': 'BUS13543',
      'category': 'BUS',
      'number': '13543',
      'operator': null,
      'to': 'Frick, Bahnhof'
    });

    expect(journey.name).to.be.equal('BUS13543');
    expect(journey.to).to.be.equal('Frick, Bahnhof');
    expect(journey.stop).to.be.an.instanceOf(Stop);
    expect(journey.stop.delay).to.be.equal(13);
    expect(journey.stop.departure).to.be.an('object');
    expect(journey.passList).to.be.empty;
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

  it('should have isStoppingIn method', () => {
    let journey = Journey.fromFfsModel(getJourneyRaw());
    expect(journey.isStoppingIn('capolago')).to.be.true;
    expect(journey.isStoppingIn('Canicattì')).to.be.false;
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
      let departure = moment();
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

  function getJourneyRaw() {
    return {
      'stop': {
        'station': {
          'id': '8518475',
          'name': 'Mendrisio S. Martino',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.877653,
            'y': 8.983028
          },
          'distance': null
        },
        'arrival': null,
        'arrivalTimestamp': null,
        'departure': '2017-04-20T19:37:00+0200',
        'departureTimestamp': 1492709820,
        'delay': 3,
        'platform': '2',
        'prognosis': {
          'platform': '2',
          'arrival': null,
          'departure': null,
          'capacity1st': 1,
          'capacity2nd': 1
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8518475',
          'name': 'Mendrisio S. Martino',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.877653,
            'y': 8.983028
          },
          'distance': null
        }
      },
      'name': 'S 10',
      'category': 'S',
      'subcategory': 'S',
      'categoryCode': 5,
      'number': '10',
      'operator': 'SBB',
      'to': 'Chiasso',
      'passList': [{
        'station': {
          'id': '8518475',
          'name': 'Mendrisio S. Martino',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.877653,
            'y': 8.983028
          },
          'distance': null
        },
        'arrival': '2017-04-20T19:37:00+0200',
        'arrivalTimestamp': 1492709820,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8518475',
          'name': 'Mendrisio S. Martino',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.877653,
            'y': 8.983028
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505304',
          'name': 'Capolago-Riva S. Vitale',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.90285,
            'y': 8.978893
          },
          'distance': null
        },
        'arrival': '2017-04-20T19:40:00+0200',
        'arrivalTimestamp': 1492710000,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505304',
          'name': 'Capolago-Riva S. Vitale',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.90285,
            'y': 8.978893
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505303',
          'name': 'Maroggia-Melano',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.932442,
            'y': 8.97394
          },
          'distance': null
        },
        'arrival': '2017-04-20T19:43:00+0200',
        'arrivalTimestamp': 1492710180,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505303',
          'name': 'Maroggia-Melano',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.932442,
            'y': 8.97394
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505302',
          'name': 'Melide',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.955724,
            'y': 8.948348
          },
          'distance': null
        },
        'arrival': '2017-04-20T19:47:00+0200',
        'arrivalTimestamp': 1492710420,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505302',
          'name': 'Melide',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 45.955724,
            'y': 8.948348
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505300',
          'name': 'Lugano',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.005506,
            'y': 8.946874
          },
          'distance': null
        },
        'arrival': '2017-04-20T19:55:00+0200',
        'arrivalTimestamp': 1492710900,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505300',
          'name': 'Lugano',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.005506,
            'y': 8.946874
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505219',
          'name': 'Lamone-Cadempino',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.039719,
            'y': 8.932122
          },
          'distance': null
        },
        'arrival': '2017-04-20T20:00:00+0200',
        'arrivalTimestamp': 1492711200,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505219',
          'name': 'Lamone-Cadempino',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.039719,
            'y': 8.932122
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505218',
          'name': 'Taverne-Torricella',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.056682,
            'y': 8.930325
          },
          'distance': null
        },
        'arrival': '2017-04-20T20:03:00+0200',
        'arrivalTimestamp': 1492711380,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505218',
          'name': 'Taverne-Torricella',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.056682,
            'y': 8.930325
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505217',
          'name': 'Mezzovico',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.094284,
            'y': 8.928581
          },
          'distance': null
        },
        'arrival': '2017-04-20T20:08:00+0200',
        'arrivalTimestamp': 1492711680,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505217',
          'name': 'Mezzovico',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.094284,
            'y': 8.928581
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505216',
          'name': 'Rivera-Bironico',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.123984,
            'y': 8.925282
          },
          'distance': null
        },
        'arrival': '2017-04-20T20:12:00+0200',
        'arrivalTimestamp': 1492711920,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505216',
          'name': 'Rivera-Bironico',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.123984,
            'y': 8.925282
          },
          'distance': null
        }
      }, {
        'station': {
          'id': '8505214',
          'name': 'Giubiasco',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.17382,
            'y': 9.003587
          },
          'distance': null
        },
        'arrival': '2017-04-20T20:21:00+0200',
        'arrivalTimestamp': 1492712460,
        'departure': null,
        'departureTimestamp': null,
        'delay': null,
        'platform': '',
        'prognosis': {
          'platform': null,
          'arrival': null,
          'departure': null,
          'capacity1st': null,
          'capacity2nd': null
        },
        'realtimeAvailability': null,
        'location': {
          'id': '8505214',
          'name': 'Giubiasco',
          'score': null,
          'coordinate': {
            'type': 'WGS84',
            'x': 46.17382,
            'y': 9.003587
          },
          'distance': null
        }
      }],
      'capacity1st': null,
      'capacity2nd': null
    };
  }

});
