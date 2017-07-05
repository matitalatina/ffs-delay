function getWatcher() {
  return {
    stationName: 'Mendrisio S. Martino',
    limitTrains: 3,
    transportationFilter: ['s_sn_r', 'ec_ic'],
    trainDestinations: ['chiasso', 'albate'],
    timeZone: 'Europe/Rome',
    notificationOptions: {
      color: 'purple',
    },
  };
}

module.exports = {
  getWatcher,
};