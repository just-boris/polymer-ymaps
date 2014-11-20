var path = require('path');

module.exports = {
    verbose: true,
    root: path.dirname(__dirname),
    browsers:    process.argv.indexOf('--remote') === -1 ? ['firefox'] : ['linux/firefox']
};
