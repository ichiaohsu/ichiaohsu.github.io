var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      port:8080,
      livereload: true,
      directoryListing: false,
      open: false,
      fallback: 'index.html'
    }));
});

gulp.task('default',['webserver']);