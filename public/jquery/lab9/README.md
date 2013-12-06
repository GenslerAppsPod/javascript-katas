## What you will Learn?

This Lab-9 teaches you how to inject some html in existing DOM element using the utility function _inhectHtml().


## Instructions:

Create the new tool.

 Open js in the editor and add a private method _createDiv:

	  _createDiv:function(){
            
              var self=this;
              //create 3 divs in memory
              self._createDivs('add-row', 'add-column', 'card-container');

               //Inject add-column and add-row div into card-container div.
                self._injectHtml({
                    'card-container': ['add-row','add-column']
                });

               //Set styling for card-container,add-column and add-row
                self._setStyle('card-container',"position:relative;border:1px solid yellow;height:85px;width:100px;background:#ffc;border:1px solid yellow;box-shadow:-2px 2px 5px 3px #ccc;color:red !important;overflow:visible !important;background:#ffc !important;text-align: center;width:175px;margin:5px;");

                self._setStyle('add-column',"float:right;height:85px;width:20px;background:red;color:white;text-align:center;line-height:85px;");
                self._setStyle('add-row',"position:absolute;bottom:0px;float:left;height:20px;width:89%;background:red;color:white;text-align:center;");

                //set text for the add row and column div (working as button)
                self._getElement('add-column').text("+");
                self._getElement('add-row').text("+");


                $('.ui-content').append(self._getElement('card-container')); 
         }

 
 Call the method _createDiv from _create method:

 	  this._createDiv();


Now, run the server.js and open the tool in the browser.

A div with 2 children divs is shown in the browser.

 	




 
