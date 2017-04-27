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
    ffsApi.getStationboard({})
      .then((response) => {
        expect(response).to.be.a('object');
        expect(response).to.be.true;
        expect(response).to.be.equal(JSON.parse(mockStationBoard));
        ffsMock.done();
      });
  });
});
