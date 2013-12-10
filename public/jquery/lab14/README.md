## What you will Learn?

This Lab-14 teaches you how to monitor progress with progress() and notify() methods.

This lab code makes sense for long-running, multi-stage processes like dowlnloading and uploading


## Instructions:

 Create the new tool.

 Add the below private function to the tool:

  	_intervalPromise:function(millis, count) {
                var deferred = $.Deferred();
                if(count <= 0) {
                    deferred.reject("Negative repeat count " + count);
                }
                var iteration = 0;
                var id = setInterval(function() {
                    deferred.notify(++iteration, count);
                    if(iteration >= count) {
                        clearInterval(id);
                        deferred.resolve();
                    }
                }, millis);
                return deferred.promise();
    },

Also, add the below code at the end of the _create() method:

     //get custom promise returned by the _intervalPromise() method.
     var notifyingPromise = this._intervalPromise(500, 5);

     //callback chain to be executed in feature when task is done or in progress.
     notifyingPromise.
                progress(function(iteration, total) {
                    //called by notify
                    console.debug("Completed ", iteration, "of", total);
                }).
                done(function() {
                    //called by resolve() when sucess
                    console.info("Done");
                }).
                fail(function(e) {
                    //called by resolve() when failure
                    console.warn(e);
                });
                

Now, open the console and click on the create button.

Monitor the progress in the console.





 
