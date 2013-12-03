Archi-Tool
==========

A starting point for building a new Gensler Tool.

Typically, a developer would create a new folder in the "public/tool" directory, then copy the three non qunit files over and modify them.
Then, create a new folder in the "tests/qunit" directory and copy over the qunit files.

But, even better, there's a grunt task to do this for you.
At the terminal, cd to the project directory, then just type (your tool name should replace "my-tool"):

	$ grunt newtool:my-tool
	
This will create the directory in the "public/tool" directory, copy over the boilerplate files, and do the renaming.

Important!
==========

All tools must be one word, with no hyphens (the grunt task removes any hyphens for you), and lowercase due to a limitation in the jQuery UI internals.
So, while the folders and filenames are hyphenated, the actual tool name is not.

Features
========

Test Page
---------

All tools should have the capability of being created and destroyed on-the-fly repeatedly.  This is so that we can dynamically inject/remove them into an HTML page at will.

The "test.html" page provides a Create and Destroy button that will do that, providing a visual test and development testbed.
After the destroy operation you should inspect the HTML to be sure that no orphaned HTML elements are left behind.

Events
------

The tool is very flexible in terms of events.  You can pass a function as an option:

	$('.mytool).mytool({
		destroy: function(event, data) {
			
		}
	})

 or you can bind to an event after the tool has been instantiated like this:

	$('.mytool').on('mytool:destroy', function (event, data) {
		
	});
	
As you can see by the above example, all tool events are prepended with the tool name, followed by a colon separator.

You can also do both, passing a function as an option, and then later binding to the event as many times as you want.
First, the passed option will be called, followed by the bound handlers in the order they were bound.

The "change" event is simply an example, and may not be necessary for your tool.
The "create" and "destroy" events, however, should be common to all tools
This is so that an enclosing container can rely on this consistent behavior of its children.

Getting An Instance
===================

As of jQuery UI 1.10 the namespace must be used in addition to the tool name to fetch an instance using the ".data()" technique:

    var instance = $('.mytool').data('gensler-mytool');
    
