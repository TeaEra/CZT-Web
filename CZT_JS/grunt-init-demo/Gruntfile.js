'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

	var config = {
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		config: config,

		copy: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= config.app %>/',
						src: '*.html',
						dest: '<%= config.dist %>/',
						ext: '.html',
						extDot: 'first'
					},
					{
						expand: true,
						cwd: '<%= config.app %>/',
						src: '**/*.js',
						dest: '<%= config.dist %>/',
						ext: '.min.js',
						extDot: 'first'
					}
				]
			},

      dist_php: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/php/',
            src: '*.php',
            dest: '<%= config.dist %>/php/'
          }
        ]
      }
		},

		clean: {
			dist: {
				src: [
					'<%= config.dist %>/**/*'
				],
				// filter: 'isFile'
				/*filter: function (filepath) {
					return (!grunt.file.isDir(filepath));
				}*/
			}
		},

    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: [
          '<%= config.app %>/js/**/*.js'
        ],
        dest: '<%= config.dist %>/js/default.js'
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      dist: {
        files: {
          '<%= config.dist %>/css/default.min.css': [
            '<%= config.app %>/css/*.css'
          ]
        }
      }
    },

    uglify: {
      options: {},
      dist: {
        files: {
          '<%= config.dist %>/js/default.min.js': '<%= config.dist %>/js/default.js'
        }
      }
    }

	});

  grunt.registerTask('aboutjs', ['concat', 'uglify']);
  grunt.registerTask('aboutcss', ['cssmin']);
  grunt.registerTask('aboutphp', ['copy:dist_php']);

  grunt.registerTask('build', ['aboutcss', 'aboutjs', 'aboutphp']);

};
