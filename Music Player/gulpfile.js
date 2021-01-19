const { series, src, dest, watch } = require('gulp');

const htmlClean = require('gulp-htmlclean');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const imageMin = require('gulp-imagemin');

const connect = require('gulp-connect');


const folder = {
	src: 'src/',
	dist: 'dist/'
}

function html(){
	return src(folder.src + 'html/*')
		.pipe(htmlClean())
		.pipe(dest(folder.dist + 'html/'))
		.pipe(connect.reload());
}

function css(){
	return src(folder.src + 'css/*')
		.pipe(less())
		.pipe(cleanCss())
		.pipe(dest(folder.dist + 'css/'))
		.pipe(connect.reload());
}

function js(){
	return src(folder.src + 'js/*')
		.pipe(babel())
		// .pipe(stripDebug())
		// .pipe(uglify())
		.pipe(dest(folder.dist + 'js/'))
		.pipe(connect.reload());
}

function image(){
	return src(folder.src + 'image/*')
		.pipe(imageMin())
		.pipe(dest(folder.dist + 'image/'))
}

function server(cb){
	connect.server({
		port: '1358',
		livereload: true		//自动刷新
	});
	cb();
}

watch(folder.src+'html/*',function(cb){
	html();
	cb();
})

watch(folder.src+'css/*',function(cb){
	css();
	cb();
})

watch(folder.src+'js/*',function(cb){
	js();
	cb();
})

exports.default = series(html, css, js, image, server)