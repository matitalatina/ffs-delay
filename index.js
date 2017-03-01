const ffsApi = require('./ffs/api.js').ffsApi;
const stationboardOptionsFactory = require('./ffs/api.js').stationboardOptions;
const moment = require('moment');

var optionsFactory = new stationboardOptionsFactory({
  station: 'Chiasso',
  limit: 1
}).withDatetime(moment());

new ffsApi().getStationboard(optionsFactory.getOptions())
  .then((data) => console.log(JSON.parse(data.toString())));