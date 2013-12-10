## What you will Learn?

This Lab-11 teaches you what is JQuery deferred object and how to use it.


## Instructions:


JQuery deferred object is a chainable utility object created by calling the jQuery.Deferred() method. It introduces several enhancements to the way callbacks are managed and invoked.


To know more about JQuery deffered object read the [documentation](http://api.jquery.com/category/deferred-object/).

create an ajax call by using this,

         _makeAjaxCall: function(){

               var promise = $.ajax({
                    datatype: 'xml',
                    url: 'products.xml'
                    
               });
          return promise;
        },

 Ajax call will return the promise object.

 Call the method like this,

            var promise = this._makeAjaxCall();
            promise.done(function(data) {
                console.log(data);
            });
 
 It will console the data in the browser.          



 



 
