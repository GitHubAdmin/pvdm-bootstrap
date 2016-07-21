var gulp = require( 'gulp' );

gulp.task( 'watch', ['default'], function(){
  gulp.watch( ['./src/**/*.{scss,css}'], ['css'] )
})
