'use strict';

const SlackApi = require('./api.js').SlackApi;
const config = require('../core/config.js');
const sinon = require('sinon');
const request = require('request-promise');
const expect = require('chai').expect;

const sandbox = sinon.sandbox.create();

describe('Slack Api', () => {
  afterEach(function () {
    sandbox.restore();
  });

  it('should do the call to send notification', () => {
    const slackCallStub = sandbox.stub(request, 'post')
      .returns(Promise.resolve('ok'));

    return SlackApi.sendNotification(config.slackWebhookUrl, {
      from: 'FfsDelay',
      notify: true,
      message: 'test'
    })
      .then(() => {
        expect(slackCallStub.called).to.be.true;
      });
  });
});
