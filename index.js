'use strict';

const FfsApi = require('./ffs/api.js').FfsApi;
const HipchatApi = require('./hipchat/api.js').HipchatApi;
const stationboardOptionsFactory = require('./ffs/api.js').stationboardOptionsFactory;
const moment = require('moment');
const _ = require('lodash');

const hipchatRoomId = process.env.HIPCHAT_ROOM_ID;
const hipchatToken = process.env.HIPCHAT_TOKEN;

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
  }).withDatetime(moment());

  new FfsApi().getStationboard(optionsFactory.getOptions())
    .then((data) => getTrainsWithDestinations(data.stationboard, ['chiasso', 'albate']))
    .then((trains) => trains
      .filter((t) => !!t.stop.delay)
      .map((t) => {
        var hipchatApi = new HipchatApi(hipchatToken);
        var message = `Ritardo di ${t.stop.station.delay} minuti del treno diretto a ${t.to} delle ${moment(t.stop.station.departureTimestamp).format('HH:mm')}`;
        return hipchatApi.sendNotification(hipchatRoomId, {
          from: 'FfsDelay',
          notify: true,
          message: message
        });
      })
    )
    .catch((err) => console.log(err));
}



onStart();