
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCSS = require('gulp-minify-css'),
  uncss = require('gulp-uncss');

gulp.task('magiajs', function () {
  gulp.src(['app/js/uikit.min.js', 'app/js/sticky.js', 'app/js/parallax.js', 'app/js/baguetteBox.min.js'])
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('magiacss', function () {
  gulp.src(['app/css/uikit.uncss.css', 'app/css/custom.css','app/css/baguetteBox.min.css'])
  //.pipe(uncss({html: ['dist/index.html']}))
  .pipe(concat('all.css'))
  .pipe(autoprefixer())
  .pipe(minifyCSS({keepBreaks:false}))
  .pipe(gulp.dest('dist/css/'))
});