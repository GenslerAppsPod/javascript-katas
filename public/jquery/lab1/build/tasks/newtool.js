// grunt task for creating a new Gensler Tool
// author: Kirk Austin
'use strict';

module.exports = function(grunt) {

    var toTitleCase = function(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    grunt.registerTask('newtool', 'Create a new Gensler Tool.', function() {
        if (grunt.task.current.args.length > 0) {
            for (var i = 0; i < grunt.task.current.args.length; i++) {
                var name = grunt.task.current.args[i];
                var nameMinusHyphens = name.replace(/-/g, '');
                grunt.log.write('creating tool ' + name);
                // css
                var css = grunt.file.read('boilerplate/archi-tool.css');
                css = css.replace(/architool/g, nameMinusHyphens);
                css = css.replace('Kirk Austin', '');
                grunt.file.write('public/tool/' + name + '/' + name + '.css', css);
                // js
                var js = grunt.file.read('boilerplate/archi-tool.js');
                js = js.replace(/architool/g, nameMinusHyphens);
                js = js.replace('archi-tool', name);
                js = js.replace('Kirk Austin', '');
                js = js.substring(0, js.indexOf('/*')) + js.substring(js.indexOf('*/') + 4);
                grunt.file.write('public/tool/' + name + '/' + name + '.js', js);
                // test html
                var html = grunt.file.read('boilerplate/test.html');
                html = html.replace(/archi-tool/g, name);
                html = html.replace(/architool/g, nameMinusHyphens);
                html = html.replace('Kirk Austin', '');
                html = html.replace('Archi Tool Test Page', name + ' test page');
                grunt.file.write('public/tool/' + name + '/' + 'test.html', html);
                // mobile test html
                var mobileTest = grunt.file.read('boilerplate/mobile-test.html');
                mobileTest = mobileTest.replace(/archi-tool/g, name);
                mobileTest = mobileTest.replace(/architool/g, nameMinusHyphens);
                mobileTest = mobileTest.replace('Brendan Boyd', '');
                mobileTest = mobileTest.replace('Archi Tool Test Page', name + ' test page');
                mobileTest = mobileTest.replace('Gensler Archi Tool', name);
                grunt.file.write('public/tool/' + name + '/' + 'mobile-test.html', mobileTest);
                // qUnit
                var qunitJs = grunt.file.read('boilerplate/archi-tool-qunit.js');
                qunitJs = qunitJs.replace(/architool/g, nameMinusHyphens);
                qunitJs = qunitJs.replace(/Architool/g, toTitleCase(nameMinusHyphens));
                grunt.file.write('public/tests/unit/' + name + '/' + name + '-qunit.js', qunitJs);
                var qunitHtml = grunt.file.read('boilerplate/archi-tool-qunit.html');
                qunitHtml = qunitHtml.replace(/architool/g, name);
                grunt.file.write('public/tests/unit/' + name + '/' + name + '-qunit.html', qunitHtml);
                // images
                grunt.file.copy('boilerplate/image/gensler-logo-white.svg', 'public/tool/' + name + '/image/gensler-logo-white.svg');
                grunt.file.copy('boilerplate/image/gensler-logo-red.svg', 'public/tool/' + name + '/image/gensler-logo-red.svg');
                grunt.file.copy('boilerplate/image/gensler-logo-black.svg', 'public/tool/' + name + '/image/gensler-logo-black.svg');
                grunt.log.write(' ...done ').ok();
            }
        } else {
            grunt.log.write('You must specify a tool name, such as "newtool:my-tool"');
        }
    });

};
