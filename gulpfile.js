var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require("gulp-rename"),
    foreach = require("gulp-foreach"),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    del = require('del'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    markdown = require('gulp-markdown'),
    gzip = require("gulp-gzip"),
    gulpS3 = require('gulp-s3'),
    minifyHTML = require('gulp-minify-html');

gulp.task('deploy', function() {
  var awsConfig = require('./lib/config/aws.js');
  var s3Options = {
    headers: {
      'Cache-Control': 'max-age=60, no-transform, public'
    }
  };
  gulp.src('./public/**')
    .pipe(gzip())
    .pipe(gulpS3(awsConfig, s3Options));
});

gulp.task('clean', function() {
  return del([
    './public/'
  ]);
});

gulp.task('minifyHtml', function() {
  var minHtmlOptions = {
    loose: true
  };
  return gulp.src('./public/**/*.html')
    .pipe(minifyHTML(minHtmlOptions))
    .pipe(gulp.dest('./public/'));
});

gulp.task('jade', function() {
  return gulp.src('src/views/*.jade')
    .pipe(jade({
      pretty: true,
      markdown:markdown
    }))
    .pipe(rename(function(path){
        if (path.basename=='index'){
          return;
        }
        path.dirname=path.basename.split('__').join('/');
        path.basename="index";
    }))
    .pipe(gulp.dest('./public/'))
    callback();
});

gulp.task('jadeReload', function() {
  gulp.src('src/views/*.jade')
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src('./src/assets/img/**/*')
  .pipe(gulp.dest('./public/img/'))
  .pipe(connect.reload());
});

gulp.task('favicons', function() {
  gulp.src('./src/assets/favicons/**/*')
  .pipe(gulp.dest('./public/'))
  .pipe(connect.reload());
});

gulp.task('sass', function() {
  var sassSrc = './src/assets/scss/style.scss';
  var sassDest = './public/css/';
  gutil.log('Generate CSS files ' + (new Date()).toString());
  gulp.src(sassSrc)
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest(sassDest))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss({processImport: false}))
    .pipe(gulp.dest(sassDest))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  return gulp.src('./src/assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    // .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['src/views/partials/*.jade', 'src/views/*.jade'], ['jade', 'jadeReload']);
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
  gulp.watch('./src/assets/js/**/*.js', ['js']);
  gulp.watch('./src/assets/img/**/*', ['images']);
  // gulp.watch('public/**', ['public']);
});

gulp.task('connect', function() {
  connect.server({
    root: './public/',
    livereload: true
  });
});

gulp.task('public', function() {
  gulp.src('./public/**')
    .pipe(connect.reload());
});

gulp.task('robots', function() {
  gulp.src('./src/robots.txt')
  .pipe(gulp.dest('./public/'));
});
