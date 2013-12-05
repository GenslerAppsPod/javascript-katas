## What you will Learn?

This Lab-5 teaches you how to  get elemnt created in the DOM using the utility function _getElement() and how to set the style using utility method _setStyle().



## Instructions:

 Follow instructions from lab4 for creating the new tool lab5 and also to create the divs.

 Open lab lab5-tool.js in the editor and add a private method to create the div. As given below:

	

      _styleElement:function(){
                var self=this;
               //Set styling for card-container,add-column and add-row
                self._setStyle('card-container',"position:relative;border:1px solid yellow;height:85px;width:100px;background:#ffc;border:1px solid yellow;box-shadow:-2px 2px 5px 3px #ccc;color:red !important;overflow:visible !important;background:#ffc !important;text-align: center;width:175px;margin:5px;");
      }

 
 Call the method _styleElement from _createDiv ( _createDiv method is implemented in lab4) method:

 	  this._styleElement();


Now, run the server.js and open the tool in the browser.

A div with add-column and add-row is displayed in browser.Please inspect the code in browser.

 	




 
