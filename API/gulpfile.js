const gulp = require('gulp');
const del = require("del");
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function scripts(){
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
};

function static(){
  return gulp
    .src(['src/**/*.json'])
    .pipe(gulp.dest('dist'));
};

function clean(cb) {
  return del(["dist"], cb);
}


function watchFiles() {
  gulp.watch(["src/**/*.ts", "src/**/*.json"], gulp.series(clean, static, scripts));
}


exports.build = gulp.series(clean, static, scripts);
exports.watch = watchFiles;
exports.default =  gulp.series(clean, static, scripts, watchFiles);