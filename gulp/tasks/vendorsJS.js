const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const vendorsScripts = [
    'gulp/libs/lozad.min.js',
    'node_modules/svg4everybody/dist/svg4everybody.min.js',
    'gulp/libs/imagesloaded.pkgd.js',
    'gulp/libs/masonry.pkgd.min.js',
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(uglify({
        compress: true
      }))
      .pipe(gulp.dest('dist/static/js/'))
    : cb();
};
