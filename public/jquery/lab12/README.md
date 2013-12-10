## What you will Learn?

This Lab-12 teaches combining deffered promise.

This lab illustrate how to use nested ajax calls with deffered object.

Also, you will come to know use of $.when().

## Instructions:

 Create the new tool.

 Add the below private function to the tool:

  	_jsonDoubleCall:function(){

  				//Ajax request 1
                var promise1= $.ajax({
                    dataType: "json",
                    url: 'square.json',
                });

                //Ajax request 2
                var promise2= $.ajax({
                    dataType: "xml",
                    url: 'products.xml',
                });

                //executed when both the ajax call results are available.
                
                $.when(promise1,promise2).done(function(result1,result2){
                		//do something with result1 and result2
                        console.log(result1,result2);
                });
        },

Call the method _jsonDoubleCall() from _create() method:

  	this._jsonDoubleCall();

Now, run the tool and see the console.



 
