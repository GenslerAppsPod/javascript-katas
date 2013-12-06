## What you will Learn?

This Lab-5 teaches you how to  get elemnt created in the DOM using the utility function _getElement().



## Instructions:

 Follow instructions from lab4 for creating divs.

 Open lab lab5-tool.js in the editor and add a private method to create the div. As given below:

	_createDiv:function(){
            
              var self=this;
              //Create  Divs named card-container
              self._createDivs('card-container'); //statement from lab4

              //get the element from the memory using _getElement() method.
              self._getElement('card-container').text("I am DIV");
              
              //append to the DOM
              $('.ui-content').append(self._getElement('card-container')); 
	 }

 
 Call the method _createDiv from _create method:

 	  this._createDiv();


Now, run the server.js and open the tool in the browser.

A div is created in the DOM and appended to the .ui-cointent. Please inspect the code in browser you will see the below DOM element:

 	<div class="gensler-lab4tool-card-container">
 		
 	</div>


 	




 
