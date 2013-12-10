## What you will Learn?

This Lab-13 teaches you how to create the custom promises with deffered object.


## Instructions:

 Create a new tool.

 The difference between promise and $.Deferred - this is exactly when we need it to implement custom methods returning promises, just like 
 $.ajax() and friends.

 Create a function,

		 _timeoutPromise: function (millis, context) {
		    var deferred = $.Deferred();
		    setTimeout(function() {
		        deferred.resolve(context);
		    }, millis);
		    return deferred.promise();
		 }

 Call the method like this, 

		 var promise = this._timeoutPromise(1000, 'Boom!');
		 promise.done(function(s) {
		    console.log(s);
		 });

  
 When the promise is done it will call context in deferred.resolve(context), that is 'Boom!' string will be printed on the console.
