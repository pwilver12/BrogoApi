const gulp = require('gulp');
const $$ = require('gulp-load-plugins')();
const browserify = require('browserify');
const babelify = require('babelify');
const del = require('del');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserifyEjs = require('browserify-ejs');

const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

const $USERHOME = process.env.HOME;

const paths = {
  src: {
    sass: ['./src/sass/**/*.sass'],
    js: ['./src/js/**/*.js'],
    appJs: ['./src/js/app.js'],
    html: ['./src/views/**/*.ejs']
  },
  dest: {
    dist: './',
    css: './build/css',
    js: './build/js',
    html: './build/html/',
    startPath: './build/html/pages'
  },
  breakpointStylesheets: './node_modules/breakpoint-sass/stylesheets'
};

const defaultEjsOptions = {
  msg: 'Hello Gulp!',
  delimiter: '?'
};

gulp.task('clean:css', (done) =>
  del(['./build/css/**/*.css'], done));

gulp.task('clean:js', (done) =>
  del(['./build/js/**/*.js'], done));

gulp.task('sass', ['clean:css'], () =>
  gulp.src(paths.src.sass)
  .pipe($$.sass({
    includePaths: [
      paths.hubspotPublicAssetsRoot,
      paths.breakpointStylesheets
    ]
  })).on('error', $$.sass.logError)
  .pipe($$.autoprefixer())
  .pipe($$.cssnano({
    zindex: false
  }))
  .pipe($$.concat('styles.css'))
  .pipe(gulp.dest(paths.dest.css))
  .pipe(browserSync.stream()));

gulp.task('js', ['clean:js'], () =>
  browserify({
    entries: paths.src.appJs,
    extensions: ['.js'],
    debug: true
  })
  .transform(browserifyEjs)
  .transform(babelify)
  .on('error', (err) => {
    $$.util.log(err);
    this.emit('end');
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe($$.uglify())
  .pipe(gulp.dest(paths.dest.js))
  .on('end', reload));

gulp.task('ejs', () =>
  gulp.src(paths.src.html)
  .pipe($$.ejs(Object.assign({}, defaultEjsOptions), {
    ext: '.html'
  }))
  .pipe(gulp.dest(paths.dest.html)));

// Reload html file when changes are saved
gulp.task('html', () =>
  gulp.src(paths.src.html)
  .on('end', reload));

gulp.task('serve', () => {
  browserSync.init({
    server: './',
    startPath: paths.dest.startPath
  });

  gulp.watch(paths.src.sass, ['sass']);
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.html, ['ejs', 'html']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['js', 'sass', 'ejs'], () => {
  gulp.run('serve');
});
