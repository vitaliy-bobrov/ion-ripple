'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');

var config = {
  scripts: {
   src: './ion-ripple.js',
   dest: './'
  },
  styles: {
   src: './ion-ripple.scss',
   dest: '.'
  }
};

var onError = function (error) {
  console.log(error.toString());
  this.emit('end');
};

gulp.task('styles', function() {
  var processors = [
    autoprefixer({
      cascade: false,
    })
  ];

  return gulp.src(config.styles.src)
  .pipe($.plumber({
    errorHandler: onError
  }))
  .pipe($.sass({
    outputStyle: 'expanded',
    precision: 10,
  }))
  .pipe($.postcss(processors))
  .pipe($.cssnano({
    convertValues: false,
    autoprefixer: false,
    reduceIdents: false,
    colormin: false
  }))
  .pipe(gulp.dest(config.styles.dest))
  .pipe($.size({title: 'styles'}));
});

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
  .pipe($.plumber({
    errorHandler: onError
  }))
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'))
  .pipe($.uglify({preserveComments: 'some'}))
  .pipe($.rename({
    suffix: '.min',
    extname: '.js',
  }))
  .pipe(gulp.dest(config.scripts.dest))
  .pipe($.size({title: 'scripts'}));
});

gulp.task('build', function() {
  gulp.start('styles', 'scripts');
});

gulp.task('watch', function() {
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.styles.src, ['styles']);
});

gulp.task('default', ['build'], function() {
  gulp.start('watch');
});
