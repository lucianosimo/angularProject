var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('comics-js', function() {
	return gulp.src('comics/**/*.js','login/**/.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
