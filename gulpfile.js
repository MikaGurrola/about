var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');


// Development Tasks
// -----------------

gulp.task('sass', function() {
  return gulp.src('dev/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('public/css')) // Outputs it in the current directory
    ;
})

gulp.task('watch', function() {
    gulp.watch('dev/scss/**/*.scss', ['sass'])
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('public'));
});

// Optimizing Images
gulp.task('media', function() {
  return gulp.src('app/media/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching media that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('public/media'))
});

// Copying css
gulp.task('css', function() {
  return gulp.src('app/css/**/*')
    .pipe(gulp.dest('public/css'))
})




