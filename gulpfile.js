var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');



gulp.task('compileJs',function(){
	return gulp.src('./src/scripts/index.js')
			  .pipe(webpack( require('./webpack.config.js') ))
  			  .pipe(gulp.dest('dist/'))
  			   .pipe(connect.reload());

});



gulp.task('less',function(){
	return gulp.src('./src/style/less/*.less')
		.pipe(less({
			paths:[ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest('./dist/style'))
		.pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});



gulp.task('watch',function(){
	gulp.watch('./src/style/less/*.less',['less']);
	gulp.watch('./src/scripts/*.js',['compileJs']);

})


gulp.task('default',['watch','connect']);