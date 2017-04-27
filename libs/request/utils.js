'use strict';

const Q = require('q');

class RequestUtils {
  static toJsonQ(request) {
    var deferred = Q.defer();
    var json = '';

    request
      .on('data', (data) => json += data)
      .on('error', (err) => {
        console.log(err);
        deferred.reject(err);
      })
      .on('end', (response) => {
        deferred.resolve(JSON.parse(json));
      });
    return deferred.promise;
  }
}

var exports = module.exports = {};
exports.RequestUtils = RequestUtils;
