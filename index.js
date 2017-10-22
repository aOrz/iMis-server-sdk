const rp = require('request-promise');

function iMis(key, type = 'default', url = 'http://imis.fddcn.cn') {
  this.key = key;
  this.type = type;
  this.sendUrl = `${url}/api/v1/log/${type}`;
}

iMis.prototype.send = function(body) {
  var options = {
    method: 'POST',
    uri: this.sendUrl,
    headers: {
      'token': this.key,
      'type': 'server'
    },
    body,
    json: true, // Automatically stringifies the body to JSON
  };

  rp(options)
    .then(function(parsedBody) {
      console.log(parsedBody);
      // POST succeeded...
    })
    .catch(function(err) {
      console.log(err);
      // POST failed...
    });
};

module.exports = iMis;
