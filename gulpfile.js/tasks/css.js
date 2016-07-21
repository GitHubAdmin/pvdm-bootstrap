var gulp = require( 'gulp' );
var eventStream = require( 'event-stream' );
var concat = require( 'gulp-concat' );
var sass = require( 'gulp-sass' );
var changed = require( 'gulp-changed' );
var stripCssComments = require('gulp-strip-css-comments');
var cssnano = require( "gulp-cssnano" );
var rename = require( "gulp-rename" );
var debug = require( "gulp-debug" );
var sourcemaps = require('gulp-sourcemaps');

gulp.task( 'css', function(cb) {

  // Grab bootstrap
  function _bootstrap(){
    return gulp.src( ['./src/bootstrap.css'] )
      .pipe( debug() )
  }

  // Grab overrides
  function _overrides(){
    return gulp.src( ['./src/bootstrap-overrides/*.scss'] )
      .pipe( sass( {errLogToConsole: true} ) )
      .pipe( debug() )
  }

  // Copy helpers
  gulp.src( ['./src/helpers/*'] )
    .pipe( gulp.dest( './dist/helpers' ) )
    .pipe( debug() )

  // Process bootstrap & overrides
  return eventStream.merge( _bootstrap(), _overrides() )
    .pipe( changed( './dist' ) )
    .pipe( concat( 'pvdm-bootstrap.css' ) )
    .pipe( gulp.dest( './dist' ) )
    .pipe( stripCssComments( {preserve:false} ) )
    .pipe( sourcemaps.init() )
    .pipe( cssnano() )
    .pipe( sourcemaps.write() )
    .pipe( rename('pvdm-bootstrap.min.css') )
    .pipe( gulp.dest( './dist' ) )

});