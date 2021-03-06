var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var source = [
    './app/*.module.js',
    './ext-modules/**/*.js'
];
source

// gulp.task('ngAnnotateTest', function() {
//     return gulp
//         .src(source)
//         .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
//         .pipe(plug.rename(function(path) {
//             path.extname = '.annotated.js';
//         }))
//         .pipe(gulp.dest('./build'));
//         .pipe(plug())
// });

gulp.task('hint', function(){
    return gulp
        .src(source)
        .pipe(plug.jshint('./.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'))
});

gulp.task('watch', function(){
    return gulp
        .watch(source, ['hint'])
        .on('change', function(event) {
          console.log('*** File '+event.path + ' was '+event.type+' , running tasks...');
        })
});
