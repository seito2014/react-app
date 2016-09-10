'use strict';

import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import notify      from 'gulp-notify';
import ejs         from 'gulp-ejs';
import gulpif       from 'gulp-if';
import browserSync  from 'browser-sync';
import handleErrors from '../util/handle-errors';
import config       from '../config';

gulp.task('ejs', function () {

    return gulp.src(config.ejs.src)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ejs(config.ejs, {ext: '.html'}))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.ejs.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));

});