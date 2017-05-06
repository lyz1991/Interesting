const gulp = require('gulp');
const $ = require('gulp-load-plugins')()
gulp.task('clean', () => {
  gulp.src(['./public/build/*']).pipe($.clean())
})
gulp.task('less', () => {
  gulp.src('./public/less/**/*')
    .pipe($.less())
    .pipe($.plumber())
    .pipe($.autoprefixer({
      browsers: ['last 10 versions']
    }))
    .pipe($.cssmin())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', function () {
  gulp.watch('./public/less/**/*.less', ['less']);
});
gulp.task('default', ['clean', 'less'])