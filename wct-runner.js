var wct = require('web-component-tester');
var path = require('path');
var env = process.env;

function getOptions(remote) {
    var suitePath = path.relative('../', 'test/')+path.sep;
    return {
        suites: [suitePath],
        remote: remote,
        verbose: false,
        root: '../',
        browsers: remote ? ['linux/firefox'] : ['firefox', 'safari'],
        sauce: {
            username:  env.SAUCE_USERNAME,
            accessKey: env.SAUCE_ACCESS_KEY,
            tunnelId:  env.SAUCE_TUNNEL_ID
        }
    }
}

module.exports = function(remote, callback) {
    wct.test(getOptions(remote), callback);
};
