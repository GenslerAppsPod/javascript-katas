// grunt task for post-processing jsbeautifier
// author: Kirk Austin
'use strict';

module.exports = function(grunt) {

    var tab = '    ';
    var reformatTemplate = function(templateString, indentation) {
        var lineArray = templateString.split('+');
        var lineArrayCount = lineArray.length;
        var result = '';
        for (var i = 0; i < lineArrayCount; i++) {
            if (i < lineArrayCount - 1) {
                if (i === 0) {
                    result += lineArray[i].trim() + ' +\n';
                } else {
                    result += indentation + tab + lineArray[i].trim() + ' +\n';
                }
            } else {
                result += indentation + tab + lineArray[i].trim();
            }
        }
        return result;
    };

    var getIndentation = function(line) {
        var result = '';
        var i = 0;
        if (line) {
            while (line.charAt(i) === ' ') {
                i++;
            }
        }
        for (var index = 0; index < i; index++) {
            result += ' ';
        }
        return result;
    };

    grunt.registerTask('templateformatter', 'Post Processing for jsbeautifier.', function() {

        var files = grunt.config(['templateformatter', 'files']);
        var fileCount = files.length;
        for (var i = 0; i < fileCount; i++) {
            var templateCount = 0;
            var file = files[i];
            var js = grunt.file.read(file);
            var lineArray = js.split('\n');
            var lineArrayCount = lineArray.length;
            var j;
            var newArray = [];
            var indentation = '';
            // pre-process the array to eliminate template splitting by jsbeautifier
            for (j = 0; j < lineArrayCount; j++) {
                // save the indentation
                indentation = getIndentation(lineArray[j]);
                var element = lineArray[j].trim();
                if (element && element.lastIndexOf('+') === element.length - 1) {
                    j++; // advance to the next line
                    // keep going until we find a semicolon
                    while (lineArray[j].indexOf(';') < 0) {
                        element += lineArray[j];
                        j++;
                    }
                    element += lineArray[j];
                }
                // restore the indentation
                element = indentation + element;
                newArray.push(element);
            }
            lineArray = newArray;
            lineArrayCount = lineArray.length;
            for (j = 0; j < lineArrayCount; j++) {
                // save the indentation
                indentation = getIndentation(lineArray[j]);
                // trim the leading/trailing white space
                var line = lineArray[j].trim();
                // does it begin with var?
                if (line.indexOf('var') === 0) {
                    // does it end with a semicolon?
                    if ((line.lastIndexOf(';') === line.length - 1)) {
                        // does it contain a plus sign?
                        if (line.indexOf('+') > 0) {
                            // does it have html tags?
                            if (line.indexOf('<') > 0 && line.indexOf('>') > 0) {
                                // skip thead elements
                                if (line.indexOf('thead') < 0) {
                                    // is it a template?
                                    if (line.indexOf('<th') > 0 || line.indexOf('<td') > 0 || line.indexOf('{{') > 0 || line.indexOf('${') > 0) {
                                        templateCount++;
                                        line = reformatTemplate(line, indentation);
                                    }
                                }
                            }
                        }
                    }
                }
                // restore the indentation
                lineArray[j] = indentation + line;
            }
            if (templateCount) {
                var result = lineArray.join('\n');
                grunt.file.write(file, result);
                if (templateCount === 1) {
                    console.log(file, '--file has 1 template that was processed');
                } else {
                    console.log(file, '--file has ' + templateCount + ' templates that were processed');
                }
            }
        }
    });
};
