module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}, 
			build: {
				src: 'src/<%= pkg.name %>.js',
      			dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		clean: ['dist/styles'],
		sass: {
			dist: {
				options: {
					'style': 'expanded'
				},
				files: {
					'dist/styles.css': 'assets/styles/styles.scss'
				}
			}
		},
		watch: {
			files: ['assets/styles/**/*.scss'],
			tasks: ['clean', 'sass']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);
}