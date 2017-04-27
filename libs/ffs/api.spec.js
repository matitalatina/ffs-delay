'use strict';

const expect = require('chai').expect;

const FfsApi = require('./api.js').FfsApi;
const FfsMock = require('./api.mock.js');

let ffsMock = FfsMock
  .mockStationBoard()
  .reply(200, FfsMock.stationboardResponseWithDelay);

describe('FfsApi', () => {
  it('should do the call on stationboard endpoint', () => {
    let ffsApi = new FfsApi();
    return ffsApi.getStationboard({})
      .then((response) => {
        expect(response).to.be.a('object');
        expect(response).to.be.ok;
        expect(response).to.be.eql(FfsMock.stationboardResponseWithDelay);
        ffsMock.done();
      });
  });
});
