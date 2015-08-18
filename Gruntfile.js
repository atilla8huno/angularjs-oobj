module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        wiredep: {
            target: {
                src: 'index.html'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            arquivosweb: {
                files: ['app/**/*.js', '**/*.html', 'app/**/*.css']
            },
            wiredep_task: {
                files: ['bower.json'],
                tasks: ['wiredep']
            }
        },

        copy: {
            indexes: {
                files: [
                    {
                        expand: true,
                        src: ['*.html', 'app/**'],
                        dest: 'build/'
                    }
                ]
            }
        },

        concat: {
            principal: {
                src: ['app/js/app-config.js', 'app/js/bootstrap-controller.js'],
                dest: 'build/js/principal.js'
            }
        },

        clean: {
            build: {
                src: ['build']
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        }
    });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate']);
};