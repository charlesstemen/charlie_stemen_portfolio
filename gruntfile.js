module.exports = function(grunt){
	grunt.initConfig({
		less: {
	      development: {
	        options: {
	          compress: true,
	          yuicompress: true,
	          optimization: 2,
	          paths: ["css"],
	          livereload: true,
	          sourceMap: true,
	          sourceMapFilename: 'css/master.css.map',
	          sourceMapUrl: 'css/master.css.map',
	          sourceMapRootpath: 'http://localhost:8888/charlie_stemen_portfolio/',
	        },
	        files: {
	          'css/master.css': 'css/master.less'
	        }
	      },
				admin: {
					options: {
						compress: true,
						yuicompress: true,
						optimization: 2,
						paths: ["css"],
						livereload: true,
						sourceMap: true,
						sourceMapFilename: 'admin/styles/app.css.map',
						sourceMapUrl: 'admin/styles/app.css.map',
						sourceMapRootpath: 'http://localhost:8888/charlie_stemen_portfolio/admin/styles',
					},
					files: {
						'admin/styles/app.css': 'admin/styles/app.less'
					}
				}
	    },
	    watch: {
	      less: {
	        options: {
	          livereload: true
	        },
	        files: [
	          'css/**/*.less'
	        ],
	        tasks: ['less:development']
	      },
				admin: {
					files: [
							'admin/styles/**/*.less'
					],
					tasks: ['less:admin']
				}
	    },
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html' : 'src/index.html',
					'partials/includes/image-slider.html' : 'src/partials/includes/image-slider.html',
					'partials/includes/video-slider.html' : 'src/partials/includes/video-slider.html',
					'partials/layout/contact.html' : 'src/partials/layout/contact.html',
					'partials/layout/detail.html' : 'src/partials/layout/detail.html',
					'partials/layout/error.html' : 'src/partials/layout/error.html',
					'partials/layout/home.html' : 'src/partials/layout/home.html',
					'partials/modals/aboutMeModal.html' : 'src/partials/modals/aboutMeModal.html',
					'partials/modals/photo-detail-modal.html' : 'src/partials/modals/photo-detail-modal.html'
				}
			}
		},
		uglify: {
			options: {
				sourceMap: true,
				sourceMapRoot: 'http://localhost:8888/charlie_stemen_portfolio/'
			},
			build: {
				files: {
					'build/main.js' : [
						'js/main.js',
						'js/controllers/DetailCtrl.js',
						'js/controllers/ErrorCtrl.js',
						'js/controllers/HomeCtrl.js',
						'js/controllers/modal-controllers/AboutMeModalCtrl.js',
						'js/controllers/modal-controllers/PhotoDetailModalCtrl.js',
						'js/directives/image-slider.js',
						'js/directives/main-menu.js',
						'js/directives/project-description.js',
						'js/directives/video-slider.js',
						'js/services/ProjectService.js'
					]
				}
			}
		}
	})
	// grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['htmlmin', 'uglify']);
}
