const ffsApi = require('./ffs/api.js').ffsApi;
const stationboardOptionsFactory = require('./ffs/api.js').stationboardOptionsFactory;
const moment = require('moment');
const _ = require('lodash');

function getTrainsWithDestinations(trains, destinations) {
  var destinations = destinations.map((d) => d.toLowerCase());
  return trains.filter(function (train) {
    var currentDestination = train.to.toLowerCase();
    return destinations.reduce((found, dest) => found || currentDestination.includes(dest), false);
  });
}

function onStart() {
  var optionsFactory = new stationboardOptionsFactory({
    station: 'Mendrisio S. Martino',
    limit: 10,
    transportations: ['s_sn_r', 'ec_ic']
  }).withDatetime(moment().hours(19).minutes(30));

  new ffsApi().getStationboard(optionsFactory.getOptions())
    .then((data) => getTrainsWithDestinations(data.stationboard, ['chiasso', 'albate']))
    .then((trains) => trains
          .filter((t) => !!t.stop.delay)
          .map((t) => console.log(t))
         );
}



onStart();
