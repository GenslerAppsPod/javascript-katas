## What you will Learn?

This Lab-4 teaches you how to create a div in memory and append to the DOM using utility method _createDivs.

Also, you will learn how to add children divs to the created div using the utility method _injectHtml.


## Instructions:

 Create the new tool using lab1,using the command:

 		$ grunt newtool:lab4-tool


Open lab lab4-tool.js in the editor and add a private method to create the div. As given below:

	_createDiv:function(){
            
              var self=this;
              //Create 3 Divs add-row,add-column and card-container
              self._createDivs('add-row', 'add-column', 'card-container');

              //Add add-row and add-column as childrens of the card-container div.
              self._injectHtml({
                    'card-container': ['add-row','add-column']
              });
              
	      		//Now append to the .ui-content.You will learn _getElement method in Lab5.
              $('.ui-content').append(self._getElement('card-container')); 
	}
 
 Call the method _createDiv from _create method:

 	this._createDiv();

 Now, run the server.js and open the tool in the browser.


 A div is created in the DOM and appended to the .ui-cointent. Please inspect the code in browser you will see the below DOM element:

 	<div class="gensler-lab4tool-card-container">
 		<div class="gensler-lab4tool-add-row"></div>
 		<div class="gensler-lab4tool-add-column"></div>
 	</div>




 
