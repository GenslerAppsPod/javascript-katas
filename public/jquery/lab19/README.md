 What you will Learn?

This Lab-19 teaches you how to define animate() method.


## Instructions:

 Create a new tool.

 Create a div by using lab4 and define animate() method like this,

        this._createDivs('click-button', 'animate-content');
        this.element.append(this._getElement('click-button')).append(this._getElement('animate-content'));
        this._getElement('click-button').text('Click-me').on('click', function() {
                self._getElement('animate-content').animate({
                  width: "70%",
                  opacity: 0.4,
                  marginLeft: "0.6in",
                  fontSize: "3em",
                  borderWidth: "10px"
                 }, "fast");
                
                });

 Go to the browser and see the changes.
