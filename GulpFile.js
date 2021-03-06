var NwBuilder = require('nw-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');
 
gulp.task('nw', function () {
 
    var nw = new NwBuilder({
        version: '0.12.3',
        files: [ './**'],
        platforms: ['linux64',] // change this to 'win' for/on windows
    });
 
    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });
 
    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        gutil.log('nw-builder', err);
    });
});