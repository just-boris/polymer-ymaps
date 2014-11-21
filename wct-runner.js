var wct = require('web-component-tester');
var path = require('path');

function getOptions(remote) {
    var suitePath = path.relative('../', 'test/')+path.sep;
    return {
        suites: [suitePath],
        remote: remote,
        verbose: false,
        root: '../',
        browsers: remote ? ['linux/firefox'] : ['firefox', 'safari']
    }
}

module.exports = function(remote, callback) {
    wct.test(getOptions(remote), callback);
};
