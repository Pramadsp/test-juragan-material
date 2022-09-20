'use strict';

var { gulp, dest, src } = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');



var SCSS_SRC = './src/assets/scss';
var SCSS_DEST = './src/assets/css';

function compile_scss(){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS)
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(dest(SCSS_DEST));
};

function watch_scss(){
    gulp.watch([SCSS_SRC], compile_scss);
};



exports.default = watch_scss;
exports.compile_scss = compile_scss;