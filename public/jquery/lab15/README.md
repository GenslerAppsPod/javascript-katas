# What you will Learn?

This Lab-15 teaches you how to do chaining and transforming promises.


## Instructions:

 Create a new tool.

 Create custom promises with deferred like this,

        _square: function (value) {
            var deferred = $.Deferred();
            deferred.resolve(value);
            return deferred.promise();

         },

        _localDouble: function (val){
            var deferred = $.Deferred();
            deferred.resolve(val * 2);
            return deferred.promise();
         },

 Call the method like this,

        var promise = this._square(2);
        promise.done(function(data){
               console.log(data);
        });
            
        var promise2 = this._localDouble(2);
        promise2.done(function(data){
               console.log(data);
        });

 Now we can chaining them using deferred.then(),

        promise.then(promise2).then(function(data){
               console.log(data);
        });       
