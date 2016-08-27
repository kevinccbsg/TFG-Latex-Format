'use strict'
const   gulp = require('gulp'),
		latex = require('gulp-latex'),
		shell = require('gulp-shell');
 
gulp.task('latex-noimage',function() {
	return gulp.src('trick.tex')
	.pipe( latex() )
	.pipe( gulp.dest('./compile') )
});

gulp.task('latex', shell.task([
	'echo shit',
	'pdflatex trick.tex'
]));