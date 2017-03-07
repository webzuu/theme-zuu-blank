var gulp = require('gulp');
var browserSync = require('browser-sync');

function getTask(task) {
	return require('./../../zuu-foundation/default/gulp-tasks/' + task)(gulp, browserSync);
}

gulp.task('publish', getTask('publish'));

gulp.task('build', getTask('build'));
gulp.task('less', getTask('less'));

gulp.task('watch', function() {
	browserSync.init({
		proxy: 'blank.websites.app'
	});
	gulp.watch('assets/less/**', ['less']);
	gulp.watch('../spectrum/assets/less/**', ['less']);
	gulp.watch('data/*.json').on('change', browserSync.reload);
	gulp.watch('views/*.blade.php').on('change', browserSync.reload);
});

gulp.task('default', ['publish', 'build', 'less']);
