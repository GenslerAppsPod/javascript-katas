# What you will Learn?

This Lab-18 teaches you how to use change callback.

To illustrate this we are creating the checkbox,on click of checkbox it is firing the change callback.The checkbox is created using the div tag.


## Instructions:

 Create a new tool.

 Add these statements to optins :

            title: 'Title',
            label: 'label',
            key: 'key',
            value: false
Add the public methd setLabel() to the tool:

        // public methods
        setLabel: function(label) {
            this._setOption('label', label);
            this._getElement('label').text(label);
        },

 Add below given code to _create():

        
           //Creating the checkbox using div.
            this._createDivs('label', 'box');
            var label=this._getElement('label');
            var box=this._getElement('box');
            this.setLabel("Toogle check:");
            label.text(this.options.label);
            this.element.append(label);
            this.element.append(box);
            var self = this;
            this.element.click(function() {
                if (box.hasClass('checked')) {
                    box.removeClass('checked');
                } else {
                    box.addClass('checked');
                }
                self._fireChangeEvent();
                return false;
            });

Add this code to _getChangeEventData() method:

            var changeDataObject = {};
            changeDataObject.key = this.options.key;
            changeDataObject.value = false;
            this.options.value = false;
            if (this._getElement('box').hasClass('checked')) {
                changeDataObject.value = true;
                this.options.value = true;
            }
            return changeDataObject;

Now, run the server. Go to the browser and click on the create button.This will create the tool with label and checkbox.

Click on the checkbox,see the console.
 

