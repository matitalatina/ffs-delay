const ffsApi = require('./ffs/api.js').ffsApi;
const stationboardOptions = require('./ffs/api.js').stationboardOptions;
const moment = require('moment');

var options = new stationboardOptions({
  station: 'Chiasso',
  limit: 1
}).withDatetime(moment());

new ffsApi().getStationboard(options.getOptions())
  .then((data) => console.log(JSON.parse(data.toString())));