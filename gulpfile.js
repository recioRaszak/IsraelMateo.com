/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer'),
  minify = require('gulp-minify'),
  uncss = require('gulp-uncss');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('magiajs', function () {
  gulp.src(['app/js/uikit.min.js', 'app/js/sticky.js', 'app/js/parallax.js', 'app/js/baguetteox.min.js'])
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('uncss', function() {
  return gulp.src([
      'app/css/uikit.css'
    ])
    .pipe(uncss({
      html: [
        'dist/index.html'
      ]
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('magiacss', function () {
  gulp.src(['app/css/uikit.uncss.css', 'app/css/custom.css','app/css/baguetteBox.min.css'])
  .pipe(concat('all.css'))
  .pipe(autoprefixer())
  .pipe(minify())
  .pipe(gulp.dest('dist/css/'))
});