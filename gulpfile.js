/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  uncss = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('magiajs', function () {
  gulp.src(['app/js/uikit.min.js', 'app/js/sticky.js', 'app/js/parallax.js', 'app/js/baguettebox.min.js'])
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
});