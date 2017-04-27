'use strict';

const nock = require('nock');

var exports = module.exports = {};

exports.mockStationBoard = () => {
  return nock('http://transport.opendata.ch')
    .get('/v1/stationboard');
};

exports.stationboardResponseWithDelay = {
  "station": {
    "id": "008518475",
    "name": "Mendrisio S. Martino",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 45.877653,
      "y": 8.983028
    },
    "distance": null
  },
  "stationboard": [{
    "stop": {
      "station": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      },
      "arrival": null,
      "arrivalTimestamp": null,
      "departure": "2017-04-20T19:37:00+0200",
      "departureTimestamp": 1492709820,
      "delay": 3,
      "platform": "2",
      "prognosis": {
        "platform": "2",
        "arrival": null,
        "departure": null,
        "capacity1st": 1,
        "capacity2nd": 1
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      }
    },
    "name": "S 10",
    "category": "S",
    "subcategory": "S",
    "categoryCode": 5,
    "number": "10",
    "operator": "SBB",
    "to": "Chiasso",
    "passList": [{
      "station": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:37:00+0200",
      "arrivalTimestamp": 1492709820,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505304",
        "name": "Capolago-Riva S. Vitale",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.90285,
          "y": 8.978893
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:40:00+0200",
      "arrivalTimestamp": 1492710000,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505304",
        "name": "Capolago-Riva S. Vitale",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.90285,
          "y": 8.978893
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505303",
        "name": "Maroggia-Melano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.932442,
          "y": 8.97394
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:43:00+0200",
      "arrivalTimestamp": 1492710180,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505303",
        "name": "Maroggia-Melano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.932442,
          "y": 8.97394
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505302",
        "name": "Melide",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.955724,
          "y": 8.948348
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:47:00+0200",
      "arrivalTimestamp": 1492710420,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505302",
        "name": "Melide",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.955724,
          "y": 8.948348
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505300",
        "name": "Lugano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.005506,
          "y": 8.946874
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:55:00+0200",
      "arrivalTimestamp": 1492710900,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505300",
        "name": "Lugano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.005506,
          "y": 8.946874
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505219",
        "name": "Lamone-Cadempino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.039719,
          "y": 8.932122
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:00:00+0200",
      "arrivalTimestamp": 1492711200,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505219",
        "name": "Lamone-Cadempino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.039719,
          "y": 8.932122
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505218",
        "name": "Taverne-Torricella",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.056682,
          "y": 8.930325
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:03:00+0200",
      "arrivalTimestamp": 1492711380,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505218",
        "name": "Taverne-Torricella",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.056682,
          "y": 8.930325
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505217",
        "name": "Mezzovico",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.094284,
          "y": 8.928581
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:08:00+0200",
      "arrivalTimestamp": 1492711680,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505217",
        "name": "Mezzovico",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.094284,
          "y": 8.928581
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505216",
        "name": "Rivera-Bironico",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.123984,
          "y": 8.925282
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:12:00+0200",
      "arrivalTimestamp": 1492711920,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505216",
        "name": "Rivera-Bironico",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.123984,
          "y": 8.925282
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505214",
        "name": "Giubiasco",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.17382,
          "y": 9.003587
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:21:00+0200",
      "arrivalTimestamp": 1492712460,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505214",
        "name": "Giubiasco",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.17382,
          "y": 9.003587
        },
        "distance": null
      }
    }],
    "capacity1st": null,
    "capacity2nd": null
  }, {
    "stop": {
      "station": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      },
      "arrival": null,
      "arrivalTimestamp": null,
      "departure": "2017-04-20T19:50:00+0200",
      "departureTimestamp": 1492710600,
      "delay": null,
      "platform": "1",
      "prognosis": {
        "platform": "1",
        "arrival": null,
        "departure": null,
        "capacity1st": 1,
        "capacity2nd": 2
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      }
    },
    "name": "S 10",
    "category": "S",
    "subcategory": "S",
    "categoryCode": 5,
    "number": "10",
    "operator": "SBB",
    "to": "Chiasso",
    "passList": [{
      "station": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:50:00+0200",
      "arrivalTimestamp": 1492710600,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505305",
        "name": "Mendrisio",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.869122,
          "y": 8.978606
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:53:00+0200",
      "arrivalTimestamp": 1492710780,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505305",
        "name": "Mendrisio",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.869122,
          "y": 8.978606
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505306",
        "name": "Balerna",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.846757,
          "y": 9.005034
        },
        "distance": null
      },
      "arrival": "2017-04-20T19:58:00+0200",
      "arrivalTimestamp": 1492711080,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505306",
        "name": "Balerna",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.846757,
          "y": 9.005034
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505307",
        "name": "Chiasso",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.832176,
          "y": 9.031444
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:02:00+0200",
      "arrivalTimestamp": 1492711320,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505307",
        "name": "Chiasso",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.832176,
          "y": 9.031444
        },
        "distance": null
      }
    }],
    "capacity1st": null,
    "capacity2nd": null
  }, {
    "stop": {
      "station": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      },
      "arrival": null,
      "arrivalTimestamp": null,
      "departure": "2017-04-20T20:07:00+0200",
      "departureTimestamp": 1492711620,
      "delay": null,
      "platform": "2",
      "prognosis": {
        "platform": "2",
        "arrival": null,
        "departure": null,
        "capacity1st": 1,
        "capacity2nd": 1
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      }
    },
    "name": "S 10",
    "category": "S",
    "subcategory": "S",
    "categoryCode": 5,
    "number": "10",
    "operator": "SBB",
    "to": "Chiasso",
    "passList": [{
      "station": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:07:00+0200",
      "arrivalTimestamp": 1492711620,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8518475",
        "name": "Mendrisio S. Martino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.877653,
          "y": 8.983028
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505304",
        "name": "Capolago-Riva S. Vitale",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.90285,
          "y": 8.978893
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:10:00+0200",
      "arrivalTimestamp": 1492711800,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505304",
        "name": "Capolago-Riva S. Vitale",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.90285,
          "y": 8.978893
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505303",
        "name": "Maroggia-Melano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.932442,
          "y": 8.97394
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:13:00+0200",
      "arrivalTimestamp": 1492711980,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505303",
        "name": "Maroggia-Melano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.932442,
          "y": 8.97394
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505302",
        "name": "Melide",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.955724,
          "y": 8.948348
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:17:00+0200",
      "arrivalTimestamp": 1492712220,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505302",
        "name": "Melide",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 45.955724,
          "y": 8.948348
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505300",
        "name": "Lugano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.005506,
          "y": 8.946874
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:25:00+0200",
      "arrivalTimestamp": 1492712700,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505300",
        "name": "Lugano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.005506,
          "y": 8.946874
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505219",
        "name": "Lamone-Cadempino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.039719,
          "y": 8.932122
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:30:00+0200",
      "arrivalTimestamp": 1492713000,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505219",
        "name": "Lamone-Cadempino",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.039719,
          "y": 8.932122
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505218",
        "name": "Taverne-Torricella",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.056682,
          "y": 8.930325
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:33:00+0200",
      "arrivalTimestamp": 1492713180,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505218",
        "name": "Taverne-Torricella",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.056682,
          "y": 8.930325
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505217",
        "name": "Mezzovico",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.094284,
          "y": 8.928581
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:38:00+0200",
      "arrivalTimestamp": 1492713480,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505217",
        "name": "Mezzovico",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.094284,
          "y": 8.928581
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505214",
        "name": "Giubiasco",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.17382,
          "y": 9.003587
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:51:00+0200",
      "arrivalTimestamp": 1492714260,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505214",
        "name": "Giubiasco",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.17382,
          "y": 9.003587
        },
        "distance": null
      }
    }, {
      "station": {
        "id": "8505213",
        "name": "Bellinzona",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.195439,
          "y": 9.029512
        },
        "distance": null
      },
      "arrival": "2017-04-20T20:56:00+0200",
      "arrivalTimestamp": 1492714560,
      "departure": null,
      "departureTimestamp": null,
      "delay": null,
      "platform": "",
      "prognosis": {
        "platform": null,
        "arrival": null,
        "departure": null,
        "capacity1st": null,
        "capacity2nd": null
      },
      "realtimeAvailability": null,
      "location": {
        "id": "8505213",
        "name": "Bellinzona",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.195439,
          "y": 9.029512
        },
        "distance": null
      }
    }],
    "capacity1st": null,
    "capacity2nd": null
  }]
};
