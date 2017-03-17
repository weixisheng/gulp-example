# gulp-example
npm install [gulp-plugin-name] --save-dev

1. jshint的安装是：npm install jshint gulp-jshint --save-dev
```gulp.task("jsHint", function() {
    gulp.src("js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter());
});
```
2. gulp-load-plugins动态加载插件
```
var $ = require("gulp-load-plugins")();  
//或者加参数
var $ = require("gulp-load-plugins")(
  {
  lazyload:true,//用到插件才加载，默认true
  rename: {'gulp-task-listing': 'list'} //重命名
  }
);  
```
3. babel转换ES6代码至ES2015，压缩，混淆，重命名
```
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
```
4. sass/scss编译
```
gulp.task("sass", function() {
    gulp.src("scss/test.scss")
        .pipe($.sass())
        .pipe(gulp.dest("../"))
        .pipe(reload({
            stream: true
        }));
});
```
5. 合并js 
```
//第一种
<!-- usemin合并代码 -->
    <!-- build:js js/opeimzed.js -->
    <script src="js/foo.js"></script>
    <script src="js/bar.js"></script>
    <!-- endbuild -->
    
gulp.task("usemin", function() {
    gulp.src("index.html")
        .pipe($.usemin({
            js: [$.uglify()],
            css: [$.minifyCss()]
        }))
        .pipe(gulp.dest("dist/"));
});
```
```
<!-- concat-replace合并代码 -->
    <!-- build:js -->
    <script src="js/foo.js"></script>
    <script src="js/bar.js"></script>
    <!-- endbuild -->
    
 gulp.task("concat", function() {
    gulp.src("index.html")
        .pipe($.concatReplace({
            prefix: "concat",
            base: "../",
            output: {
                css: "./build/css",
                js: "./build/js"
            }
        }))
        .pipe(gulp.dest('build/'));
});   
```
