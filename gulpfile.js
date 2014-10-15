var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('js', function() {
	return gulp.src('comics/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest('build'));
});
