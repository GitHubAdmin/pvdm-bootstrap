var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task( 'default', function(cb){
  return runSequence('clean', ['css'], cb);
});