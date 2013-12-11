# What you will Learn?

This Lab-16 teaches you how to define custom callbacks/events using _trigger() method of JQuery widget factory


We are using _trigger() in our tool to make it extensible to add callbacks so users can react when the state of our tool changes.


## Instructions:

 Create a new tool.

 Add the callback method to be called after state chage.Add the below given code to optins:

        
        myCallBack:function(event,data){
                console.log("My Call back executed...");
                console.log(event, 'callback myCallBack event');
                console.log(data, 'callback myCallBack data');
        },


 Now, call the callback when state changes.

            //Data to be passed with the event
            var eventData={};
            eventData.eventName="myCallBack";
            
            //fire the event using _trigger()
            this._trigger("myCallBack",null,eventData);

 Now, click on the create button see the console.

