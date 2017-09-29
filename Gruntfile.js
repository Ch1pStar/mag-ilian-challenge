'use strict';

const fs = require('fs');
const path = require('path');
const uglify = require('uglify-es');

module.exports = function (grunt) {

	// Config --------------------------------------------------------
	var jsFiles = {
		vendor: [
			'js/vendor/pixi.min.js',
			'js/vendor/pixi*.js',
			'js/vendor/*.js'
		],
		game: [
			'js/*.js'
		],
	};
	
	var cfg = {
		
		pkg: grunt.file.readJSON('package.json'),
		
		//Note: writing incorrect options breaks this. See https://github.com/mishoo/UglifyJS2/tree/harmony
		uglifyES6: {
			vendor: {
				output: 'dist/vendor.js',
				options: {
					mangle: true,
					compress: true
				},
				files: jsFiles.vendor,
			},
			app: {
				output: 'dist/app.js',
				options: {
					mangle: true,
					compress: true
				},
				files: jsFiles.game,
			},
		},
				
		clean: {
			build: ['dist/**']
		},
		
		copy: {
			main:{
				files: [
					{expand: true, cwd: 'images', src: ['*'], dest: 'dist/images/'},
					{expand: true, cwd: 'styles/',  src: ['index.html'], dest: 'dist/'},
					{expand: true, cwd: 'styles/',  src: ['*.css'], dest: 'dist/styles'},
					{expand: true, cwd: 'js/vendor/',  src: ['*.css'], dest: 'dist/styles'}
				],
			}
		},
		
	};
	
	
	// Register tasks --------------------------------------------------------
	require('load-grunt-tasks')(grunt);

	grunt.initConfig(cfg);
	grunt.registerTask('build',  ['clean:build', 'copy', 'uglifyES6:vendor', 'uglifyES6:app']);

	// Custom tasks --------------------------------------------------------
	//ES6 much wow
	let uniq = a => [...new Set(a)];

	grunt.registerTask('uglifyES6', 'Minify files with UglifyJS. Supports ES6.', function () {
		var files = grunt.config.get('uglifyES6.'+this.args[0]+'.files'); 
		var options = grunt.config.get('uglifyES6.'+this.args[0]+'.options');
		var dest = grunt.config.get('uglifyES6.'+this.args[0]+'.output'); 

		grunt.log.writeln('Generating ' + dest + '...');
		var allFiles = [];
		files.forEach(function(filePath){
			allFiles = allFiles.concat(grunt.file.expand(filePath));
		});

		allFiles = uniq(allFiles);

		var completeUglifiedText = "";
		allFiles.forEach(function(filePath){
			grunt.log.writeln('Uglyfying ' + filePath + '...');
			var uglifiedText = uglify.minify( fs.readFileSync(filePath, "utf8"), options);
			if(!uglifiedText.code) return;
			completeUglifiedText += uglifiedText.code;
		},this);

		grunt.file.write(dest, completeUglifiedText);
	});

};