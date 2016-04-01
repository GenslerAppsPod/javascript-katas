module.exports = function(grunt) {
    var buildFiles = ['gruntfile.js', 'build/**/*.js', 'config/*.js', 'server.js'];

    var jsWeb = [
        // all js files of tools need to be listed here. order matters.
        'public/tool/mobiletool/mobiletool.js'
    ];

    var cssWeb = [
        // all css files of tools need to be listed here. order matters.
        'public/tool/mobiletool/mobiletool.css',
    ];

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // our custom grunt tasks
    grunt.loadTasks('build/tasks');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + '*/\n',
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            web: jsWeb,
            grunt: buildFiles
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            web: cssWeb
        },
        concat: {
            cssweb: {
                src: cssWeb,
                dest: 'public/dist/production.css'
            },
            jsweb: {
                src: jsWeb,
                dest: 'public/dist/production.js'
            }
        },
        cssmin: {
            web: {
                src: ['public/dist/production.css'],
                dest: 'public/dist/production.min.css'
            }
        },
        uglify: {
            web: {
                files: {
                    'public/dist/production.min.js': ['public/dist/production.js']
                }
            }
        },
        clean: {
            dist: {
                src: ['public/dist']
            }
        }
    });

    // Production task.
    grunt.registerTask('prod', ['clean', 'concat', 'cssmin', 'uglify', 'imagerustler']);
    // Deploy task.
    grunt.registerTask('deploy', ['clean', 'concat', 'cssmin', 'uglify', 'imagerustler']);
    // Dev mode: no minifying.
    grunt.registerTask('default', ['clean', 'jshint', 'csslint', 'concat', 'imagerustler']);

};
