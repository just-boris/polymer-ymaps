module.exports = {
    verbose: true,
    browsers:    process.argv.indexOf('--remote') === -1 ? ['firefox'] : ['linux/firefox']
};
