var wct = require('web-component-tester');
var path = require('path');
var suitePath = path.relative('../', 'test/')+path.sep;
var remote = process.argv.indexOf('--remote') !== -1;

var options = {
    remote: remote,
    verbose: false,
    root: '../',
    browsers: remote ? ['linux/firefox'] : ['firefox', 'safari']
};

var args = Object.keys(options).filter(function(key) {
    return options[key];
}).map(function(key) {
    return '--' + key + (typeof options[key] !== 'boolean' ? ' ' + options[key].toString() : '');
}).join(' ').split(' ');
args.push(suitePath);

process.title = 'wct';
wct.cli.run(process.env, args, process.stdout, function(error) {
    process.exit(error ? 1 : 0);
});
