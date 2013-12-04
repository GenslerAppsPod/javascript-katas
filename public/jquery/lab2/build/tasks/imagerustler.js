// grunt task for moving images to dist/image
// author: Kirk Austin
'use strict';

module.exports = function(grunt) {

    grunt.registerTask('imagerustler', 'Move images to the dist/image directory.', function() {

        var previewPageBegin = '' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '   <head>\n' +
            '       <meta charset="utf-8">\n' +
            '       <meta name="author" content="Kirk Austin">\n' +
            '       <title>Image Preview</title>\n' +
            '   </head>\n' +
            '   <body>\n';

        var previewPageEnd = '' +
            '   </body\n' +
            '</html>\n';

        var previewPageHtml = '';

        var generateImageTag = function(src) {
            return '' +
                '       <div style="display:inline-block;">\n' +
                '           <div style="background-color:white;">\n' +
                '               <img src="' + src + '"></img>\n' +
                '           </div>\n' +
                '           <div style="background-color:black;">\n' +
                '               <img src="' + src + '"></img>\n' +
                '           </div>\n' +
                '           <div>\n' +
                '               ' + src + '\n' +
                '           </div>\n' +
                '       </div>\n';
        };

        var filesCopied = 0,
            file, files, fileCount, fileName, destination;

        var arrangeImageFiles = function(dir) {
            var dirs = grunt.file.expand(dir);
            var dirCount = dirs.length;
            for (var i = 0; i < dirCount; i++) {
                var toolImageDir = dirs[i];
                if (toolImageDir[toolImageDir.length - 1] !== '/') {
                    toolImageDir += '/';
                }
                files = grunt.file.expand(toolImageDir + '/*');
                fileCount = files.length;
                previewPageHtml = previewPageBegin.toString();
                for (var j = 0; j < fileCount; j++) {
                    file = files[j];
                    fileName = file.substring(file.lastIndexOf('/') + 1);
                    if (fileName !== 'preview.html') {
                        previewPageHtml += generateImageTag(fileName);
                        destination = 'public/dist/image/' + fileName;
                        grunt.file.copy(file, destination);
                        filesCopied++;
                    }
                }
                previewPageHtml += previewPageEnd.toString();
                grunt.file.write(toolImageDir + '/preview.html', previewPageHtml);
            }
        };

        // spin through the tools
        arrangeImageFiles('public/tool/**/image');

        // do the same for the css/image directory
        arrangeImageFiles('public/css/**/image');

        // create a preview for the dist/image directory
        files = grunt.file.expand('public/dist/image/*');
        fileCount = files.length;
        previewPageHtml = previewPageBegin.toString();
        for (var i = 0; i < fileCount; i++) {
            file = files[i];
            fileName = file.substring(file.lastIndexOf('/') + 1);
            if (fileName !== 'preview.html') {
                previewPageHtml += generateImageTag(fileName);
            }
        }
        previewPageHtml += previewPageEnd.toString();
        grunt.file.write('public/dist/image/preview.html', previewPageHtml);

        console.log(filesCopied + ' files were copied to the public/dist/image directory.');
        files = grunt.file.expand('public/dist/image/*');
        var duplicatesRemoved = filesCopied - files.length;
        console.log(duplicatesRemoved + ' duplicates were removed.');

    });

};
