var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat');

/*gulp.task('minify', function () {
   gulp.src('app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});*/
gulp.task('js', function () {
   return gulp.src(['*.js','comics/**/*.js','login/**/*.js','friends/**/*.js','loans/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'));
});