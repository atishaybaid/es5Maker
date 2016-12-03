var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');


gulp.task('less',function(){
	return gulp.src('./src/style/less/*.less')
		.pipe(less({
			paths:[ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest('./dist/style'));
})


gulp.task('watch',function(){
	gulp.watch('./src/style/less/*.less',['less']);
})


gulp.task('default',['watch']);