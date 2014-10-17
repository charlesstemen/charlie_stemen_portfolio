module.exports = function(grunt){
	grunt.initConfig({
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
					'partials/modals/aboutMeModal.html' : 'src/partials/modals/aboutMeModal.html'
				}
			}
		},
		uglify: {
			options: {},
			build: {
				files: {
					'build/main.js' : [
						'js/main.js',
						'js/controllers/DetailCtrl.js',
						'js/controllers/ErrorCtrl.js',
						'js/controllers/HomeCtrl.js',
						'js/controllers/modal-controllers/AboutMeModalCtrl.js',
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

	grunt.registerTask('default', ['htmlmin', 'uglify']);
}