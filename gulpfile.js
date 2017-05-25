let gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    $ = require("gulp-load-plugins")(),
    del = require("del"),
    jshint = require("gulp-jshint");
	spritesmith = require('gulp.spritesmith')
//es6->es5,压缩，混淆，重命名
gulp.task("babel", function() {
    gulp.src('./*.es6.js')
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.uglify())
        .pipe($.obfuscate())
        .pipe($.regexRename(/\.es6/, ''))
        .pipe(gulp.dest('./'));
});
gulp.task("babel2", function() {
    gulp.src('./*.es6.js')
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.regexRename(/\.es6/, ''))
        .pipe(gulp.dest('./'));
});
gulp.task("jsHint", function() {
    gulp.src("js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter());
});
//scss编译
gulp.task("sass", function() {
    gulp.src("scss/test.scss")
        .pipe($.sass())
        .pipe(gulp.dest("../"))
        .pipe(reload({
            stream: true
        }));
});

//合并js
gulp.task("usemin", function() {
    gulp.src("index.html")
        .pipe($.usemin({
            js: [$.uglify()],
            css: [$.minifyCss()]
        }))
        .pipe(gulp.dest("dist/"));
});

gulp.task("concat", function() {
    gulp.src("index.html")
        .pipe($.concatReplace({
            prefix: "bundle",
            base: "../",
            output: {
                js: "./build/js"
            }
        }))
        .pipe(gulp.dest('build/'));
});
//删除文件
gulp.task("clean", function(cb) {
    del(["dist/*", "build/*"], cb);
});
//雪碧图
gulp.task('sprite',function(){
	gulp.src('img/ico/*.png')
	.pipe(spritesmith({
		imgName:'sprite.png',
		cssName:'css/sprite.css',
		padding:0,
		algorithm:'top-down',
		cssTemplate:function (data) {
                var arr=[];
                data.sprites.forEach(function (sprite) {
                    arr.push(".icon-"+sprite.name+
                    "{" +
                    "background-image: url('"+sprite.escaped_image+"');"+
                    "background-position: "+sprite.px.offset_x+"px "+sprite.px.offset_y+"px;"+
                    "width:"+sprite.px.width+";"+
                    "height:"+sprite.px.height+";"+
                    "}\n");
                });
                return arr.join("");
            }
	}))
	.pipe(gulp.dest('img/'));
});
//监听服务
gulp.task("server", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.es6.js", ["babel"]);
    gulp.watch("*").on('change', reload);
});

gulp.task("default", ["server"]);
