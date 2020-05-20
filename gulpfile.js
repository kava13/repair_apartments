let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let minHTML = require('gulp-htmlmin');
let tinyPNG = require('gulp-tinypng-compress');

gulp.task('default', defaultTask);

function defaultTask(done) {
    done();
}

gulp.task('minify-css', function (done) {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css/'))

    done();
})

gulp.task('minify-html', function (done) {
    return gulp.src('*.html')
        .pipe(minHTML({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))

    done();
})

gulp.task('move-fonts', function () {
    return gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
    done();
})

gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'b35zXZP2ndHSN9Sd0NQ0TZK18GXDW7Mt',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/img'));
    done();
});

gulp.task('default', gulp.parallel('one', 'two', 'three', function (done) {

}))