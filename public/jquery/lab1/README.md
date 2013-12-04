## What you will Learn?

This Lab-1 teaches you how to create a new tool.

## Instructions:

 A grunt task exists for creating a new tool based on the boilerplate files.

 Due to jQuery UI internals, tool names are all lower case. Directories and file names can be hyphenated. The grunt task will do the right thing as far as stripping the hyphens from the tool name.

 To create a new tool you cd to the project directory and type:

    $ grunt newtool:lab1-tool

 

 A new directory will be created in the "public/tool" directory with the starter files (html, CSS and JS file). Additionally, skeleton qUnit files will be generated in the "tests/unit" directory.

 Now go to terminal and type:

    $ node server.js

 Now you can go to the browser and type:

    http://localhost:portno/ tool/lab1-tool/mobile-test.html
 Here, 
 portno- The port number depends on the environment you are in (development, localdev or production).
