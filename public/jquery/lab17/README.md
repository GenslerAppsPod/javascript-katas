# What you will Learn?

This Lab-17 teaches you how to create loading callback and can be called using _trigger method.


## Instructions:

 Create a new tool.

 Create a loading callback like this,

        loaded: function(event, data) {
                //called when a page is loaded/displayed
                // pass a callback,or simply bind on the "dynamictable:loaded" event, or both
                console.log(event, 'callback loaded event');
                console.log(data, 'callback loaded data');
        },

 It can be called by using the lab16 _trigger method,

        var data = {};
        this._createDivs('div');
        this.element.append(this._getElement('div'));
        this._getElement('div').text('Hello')
        this._trigger('loaded', null, data);    

 Go to the browser and see the changes.      




