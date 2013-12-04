module.exports = function(grunt) {
    var buildFiles = ['gruntfile.js', 'build/**/*.js', 'config/*.js', 'server.js'];

    var jsWeb = [
        //gensler

        // tools
        'public/tool/create-destroy-tool/create-destroy-tool.js'
        
        /*'public/tool/left-panel/left-panel.js',

        'public/tool/story-card/story-card.js',

        'public/tool/task-card/task-card.js',

        // app is always last
        'public/js/app/app.js'*/
    ];

    var cssWeb = [
        // tools
        'public/tool/create-destroy-tool/create-destroy-tool.css',
       /* 'public/tool/task-card/task-card.css',

        // app is always last
        'public/css/app.css'*/
    ];

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadTasks('build/tasks');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + '*/\n',
        jsbeautifier: {
            web: jsWeb,
            grunt: buildFiles
        },
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

    // JS Beautify.
    grunt.registerTask('beautify', ['jsbeautifier']);
    // Production task.
    grunt.registerTask('prod', ['clean', 'concat', 'cssmin', 'uglify', 'imagerustler']);
    // Deploy task.
    grunt.registerTask('deploy', ['clean', 'concat', 'cssmin', 'uglify', 'imagerustler']);
    // Dev mode: no minifying.
    //grunt.registerTask('default', 'clean lint beautify csslint qunit concat');
    grunt.registerTask('default', ['clean', 'jshint', 'beautify', 'csslint', 'concat', 'imagerustler']);

};
