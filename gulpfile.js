var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');

gulp.task('browserify', function(){
  gulp.src('src/App.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('App.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('./dist/**/*.*', {read: false}) // much faster
    .pipe(rimraf());
})

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/styles/*.css')
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.*', ['default']);
});


gulp.task('default', function(cb) {
  runSequence('clean', 'browserify', 'copy', 'watch', cb);
});

// gulp.task('default', ['clean', 'browserify', 'copy', 'watch']);


// gulp.task('default', function () {
//     return gulp.src('src/**/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel())
//         .pipe(concat('all.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'));
// });


// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var htmlreplace = require('gulp-html-replace');
// var source = require('vinyl-source-stream');
// var browserify = require('browserify');
// var watchify = require('watchify');
// var reactify = require('reactify');
// var streamify = require('gulp-streamify');

// var path = {
//   HTML: 'src/index.html',
//   MINIFIED_OUT: 'build.min.js',
//   OUT: 'build.js',
//   DEST: 'dist',
//   DEST_BUILD: 'dist/build',
//   DEST_SRC: 'dist/src',
//   ENTRY_POINT: './src/App.js'
// };

// gulp.task('copy', function(){
//   gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('watch', function() {
//   gulp.watch(path.HTML, ['copy']);

//   var watcher  = watchify(browserify({
//     entries: [path.ENTRY_POINT],
//     transform: [reactify],
//     debug: true,
//     cache: {}, packageCache: {}, fullPaths: true
//   }));

//   return watcher.on('update', function () {
//     watcher.bundle()
//       .pipe(source(path.OUT))
//       .pipe(gulp.dest(path.DEST_SRC))
//       console.log('Updated');
//   })
//     .bundle()
//     .pipe(source(path.OUT))
//     .pipe(gulp.dest(path.DEST_SRC));
// });

// gulp.task('build', function(){
//   browserify({
//     entries: [path.ENTRY_POINT],
//     transform: [reactify],
//   })
//     .bundle()
//     .pipe(source(path.MINIFIED_OUT))
//     .pipe(streamify(uglify(path.MINIFIED_OUT)))
//     .pipe(gulp.dest(path.DEST_BUILD));
// });

// gulp.task('replaceHTML', function(){
//   gulp.src(path.HTML)
//     .pipe(htmlreplace({
//       'js': 'build/' + path.MINIFIED_OUT
//     }))
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('production', ['replaceHTML', 'build']);

// gulp.task('default', ['watch']);