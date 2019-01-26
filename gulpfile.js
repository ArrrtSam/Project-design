const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const del = require("delete");

sass.compiler = require("node-sass");

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/scss/**/*.scss", gulp.series(["scss", "minifyCss"]));
  gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("scss", () => {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"))
});

gulp.task("minifyCss", () => {
  return gulp
    .src("./dist/css/main.css")
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());;
});

gulp.task("cleanDist", () => {
  return del(["./dist/**/*"])
});

gulp.task("default", gulp.series("serve"));
gulp.task("build", gulp.series("cleanDist", "scss", "minifyCss"));
