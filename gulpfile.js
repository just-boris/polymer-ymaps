var gulp = require('gulp'),
    gutil = require('gulp-util'),
    vulcanize = require('gulp-vulcanize'),
    del = require('del'),
    wct = require('./wct-runner');

var DIST_DIR = 'dist';


gulp.task('clean', function(done) {
    del([DIST_DIR+'/**/*', '!\\.*'], done);
});

gulp.task('vulcanize', ['clean'], function() {
    return gulp.src(['demo.html', 'index.html'])
        .pipe(vulcanize({
            dest: DIST_DIR,
            inline: true,
            strip: true
        }))
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(['bower.json', 'polymer-ymaps.html', 'ymaps-api.html'])
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('test', function(done) {
    wct(process.argv.indexOf('--remote') !== -1, function(error) {
        if (error) {
            done(new gutil.PluginError('web-component-tester', error, {showStack: true}));
        }
        done(error);
    });
});

gulp.task('build', ['copy', 'vulcanize']);

gulp.task('default', ['test', 'build']);
