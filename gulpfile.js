// Thanks to J.Clerc for the gulpfile organisation

var gulp 		 = require('gulp'),
	sass         = require('gulp-sass'),
	sync         = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin     = require('gulp-imagemin'),
	sourcemaps 	 = require('gulp-sourcemaps'),
	concat		 = require('gulp-concat'),
	plumber      = require('gulp-plumber'),
	uglify		 = require('gulp-uglify'),
    modernizr    = require('gulp-modernizr');

// Task HTML
gulp.task('html', () => {
    gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('dist/'))
    .pipe(sync.stream());
});

// Task style
gulp.task('style', function() {
    gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    
    .pipe(sass({ outputStyle : 'compressed'} ))
    .pipe(autoprefixer('last 2 versions'))
    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(sync.stream());
});

// Task Fonts
gulp.task('fonts', function() {
    gulp.src('src/fonts/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/fonts/'))
    .pipe(sync.stream());
});

// Task scripts
gulp.task('scripts', function() {
    return gulp.src([
        'node_modules/waypoints/lib/jquery.waypoints.min.js',
        'src/**/*.js'
        ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    
    .pipe(concat('app.js'))
    .pipe(uglify())
    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(sync.stream());
});

// Hot reload 
gulp.task('hot-reload', function() {
    sync.init({ server: 'dist/' });
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/img/*', ['images']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/fonts/**/*', ['fonts']);
    gulp.watch('src/scss/**/*.scss', ['style']);
    gulp.watch('src/*.html').on('change', sync.reload);
});

// Image compressor, thanks to J.Clerc
gulp.task('images', function() {
    gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));
});

//Task Modernizr
gulp.task('modernizr', function() {
  gulp.src('src/js/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest("dist/js"))
});

//Default run all the tasks
gulp.task('default', ['scripts', 'fonts', 'style', 'images', 'html', 'hot-reload', 'modernizr']);