'use strict';

class RequestUtils {
  static toJson(request) {
    return request
      .then(data => {
        if (data && typeof data === 'string') {
          return JSON.parse(data);
        }
        return data;
      });
  }
}

var exports = module.exports = {};
exports.RequestUtils = RequestUtils;
