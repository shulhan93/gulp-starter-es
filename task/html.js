import gulp from "gulp";

// конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";

export default () => {
    return gulp
        .src(path.html.src)
        .pipe(
            plumber({
                errorHandler: notify.onError((error) => ({
                    title: "HTML",
                    message: error.message,
                })),
            })
        )
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({ title: "до сжатия" }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title: "после сжатия" }))
        .pipe(gulp.dest(path.html.dest));
};
