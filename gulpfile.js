'use strict'
const   gulp = require('gulp'),
		shell = require('gulp-shell');

gulp.task('latex', shell.task([
	'echo TFG compiling....',
	'pdflatex TFG.tex'
]));