// Requires Gulp v4.
// $ npm uninstall --global gulp gulp-cli
// $ rm /usr/local/share/man/man1/gulp.1
// $ npm install --global gulp-cli
// $ npm install
const {src, dest, watch, series, parallel} = require('gulp');
const gulp = require('gulp');
// const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
// const sasslint = require('gulp-sass-lint');
const cache = require('gulp-cached');
const concat = require('gulp-concat');
// const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// TO INSTALL:
// npm install -save gulp gulp-autoprefixer gulp-plumber gulp-cached gulp-concat gulp-rename gulp-uglify

// Watch changes on all *.scss files and trigger buildStyles() at the end.
function watchFiles() {
	watch(
		['js/*', 'js/*/*'],
		{events: 'all', ignoreInitial: false},
		series(buildScripts)
	);
}


// JavaScript concat
function buildScripts() {
	return src([
		'js/source.js',
		// 'js/havoc.js',
	])
		.pipe(concat('wave-zero-user-script.js'))
		.pipe(dest('../'));
}


// function JavaScriptMin() {
// 	return src(['app/dist/*.js'])
// 		.pipe(uglify())
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(gulp.dest('app/dist-minified/'))
// }


// Export commands.
exports.default = parallel(watchFiles); // $ gulp
exports.watch = watchFiles; // $ gulp watch
