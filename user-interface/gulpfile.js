// Include gulp
var gulp = require('gulp');

var webserver = require('gulp-webserver');

 // Concatenate JS Files
gulp.task('scripts', function() {
	var src = ['bower_components/jquery/dist/jquery.min.js' ,
						 'bower_components/bootstrap/dist/js/bootstrap.min.js',
					   'bower_components/toastr/toastr.min.js',
					 		'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'];
    return gulp.src(src).pipe(gulp.dest('public/assets/js'));
});

gulp.task('css', function() {
	var src = ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
					   'bower_components/toastr/toastr.min.css',
					   'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'];
    return gulp.src(src).pipe(gulp.dest('public/assets/css'));
});

gulp.task('local-server', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'http://localhost:8000/login.html'
    }));
});

gulp.task('heroku-server', function() {
  gulp.src('public')
    .pipe(webserver({
			host: '0.0.0.0',
			port: process.env.PORT || 5000,
			https: false
    }));
});

 // Default Task
gulp.task('default', ['scripts', 'css', 'local-server']);

gulp.task('deploy', ['heroku-server']);
