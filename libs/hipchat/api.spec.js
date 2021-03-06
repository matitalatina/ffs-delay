'use strict';

const HipchatApi = require('./api.js').HipchatApi;
const HipchatMock = require('./api.mock.js');
const config = require('../core/config.js');

describe('HipChat Api', () => {
  it('should do the call to send notification', () => {
    let hipchatApi = new HipchatApi(config.hipchatToken);
    let hipchatMock = HipchatMock.mockSendNotification();
    //nock.recorder.rec();

    return hipchatApi.sendNotification(config.hipchatRoomId, {
      from: 'FfsDelay',
      notify: true,
      message: 'test'
    })
      .then(() => {
        hipchatMock.done();
      });
  });
});
