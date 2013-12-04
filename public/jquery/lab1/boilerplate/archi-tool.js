// Gensler archi-tool
// author: Kirk Austin
// History of the software term tool: http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html
// ensure our namespace
if (!this.gensler) {
    this.gensler = {};
}
// IE9 bug fix
if (!window.console) {
    window.console = {};
}
if (!window.console.log) {
    window.console.log = function () {};
}
// depends: jQuery >=1.9.0, jQuery UI Widget >=1.10.0

/*
    The architype for a Gensler Tool, which is a modern evolution of the "view/controller" pattern.
    This is a boilerplate, not a base class.  Copy and modify this file when starting a new Gensler Tool.
    
    Patterns for HTML injection and event handling are provided.
*/

(function (gensler, $, undefined) {

    $.widget("gensler.architool", {
        // public class variables go here
        version: "0.1.0", // http://semver.org
        // public instance variables are in options
        options: {
            title: 'Title',
            instance: {
                element: undefined, // filled in during create
                namespace: 'gensler',
                name: 'architool',
                tool: undefined // filled in during create
            },
            // callbacks
            create: function (event, data) {
                // pass a callback,or simply bind on the "architool:create" event, or both
                //console.log(event, '--callback create event')
                //console.log(data, '--callback create data')
            },
            change: function (event, data) {
                // pass a callback,or simply bind on the "architool:change" event, or both
                //console.log(event, '--callback change event');
                //console.log(data, '--callback change data');
            },
            destroy: function (event, data) {
                // pass a callback,or simply bind on the "architool:destroy" event, or both
                //console.log(event, '--callback destroy event');
                //console.log(data, '--callback destroy data');
            }
        },

        // public methods
        setTitle: function (title) {
            this._setOption('title', title);
        },

        // private methods begin with an underscore
        // jQuery UI Widget override
        _create: function () {
            this.options.instance.element = this.element;
            this.options.instance.tool = this;
            // private instance variables begin with an underscore
            this._elementMap = {};
            // prepare for post 1.9, event prefix is separated with a colon
            if (this.widgetEventPrefix && this.widgetEventPrefix[this.widgetEventPrefix.length - 1] !== ':') {
                this.widgetEventPrefix = this.widgetEventPrefix + ':';
            }
            // the "ui-widget" class declares it a jQuery UI widget
            this.element.addClass(this.widgetFullName + ' ui-widget');
            // inject DOM elements and bind event handlers
        },

        // jQuery UI Widget override
        _getCreateEventData: function () {
            // data object to be returned by the "create" event
            var createDataObject = {};
            return createDataObject;
        },

        _fireChangeEvent: function () {
            // the event handler looks like this:
            // function(event, data) {};
            var eventName = 'change';
            this._trigger(eventName, null, this._getChangeEventData());
        },

        _getChangeEventData: function () {
            // data object to be returned by the "change" event
            var changeDataObject = {};
            return changeDataObject;
        },

        // jQuery UI Widget override
        _destroy: function () {
            this._trigger('destroy', null, this._getDestroyEventData());
            this.element.removeClass(this.widgetFullName + ' ui-widget');
            this.element.empty();
        },

        _getDestroyEventData: function () {
            // data object to be returned by the "destroy" event
            var destroyDataObject = {};
            return destroyDataObject;
        },

        // JQuery UI Widget override
        _setOption: function (key, value) {
            // do anything special here, before calling the superclass
            this._super(key, value);
        },

        _getElement: function (name) {
            return this._elementMap[name];
        },

        _createTables: function (names) {
            // cache some tables to be injected/removed later
            var argumentsLength = arguments.length;
            for (var i = 0; i < argumentsLength; i++) {
                var name = arguments[i];
                var table = this._elementMap[name] = $('<table width="100%" class="' + this.widgetFullName + '-' + name + '"></table>');
                var header = this._elementMap[name + '-thead'] = $('<thead></thead>');
                var footer = this._elementMap[name + '-tfoot'] = $('<tfoot></tfoot>');
                var body = this._elementMap[name + '-tbody'] = $('<tbody></tbody>');
                var jsonString = '{"' + name + '":["' + name + '-thead", "' + name + '-tfoot", "' + name + '-tbody"]}';
                var jsObject = JSON.parse(jsonString);
                this._injectHtml(jsObject);
            }
            return this;
        },

        _createDivs: function (names) {
            // cache some divs to be injected/removed later
            var argumentsLength = arguments.length;
            for (var i = 0; i < argumentsLength; i++) {
                var name = arguments[i];
                this._elementMap[name] = $('<div class="' + this.widgetFullName + '-' + name + '"></div>');
            }
            return this;
        },

        _createSpans: function (names) {
            // cache some spans to be injected/removed later
            var argumentsLength = arguments.length;
            for (var i = 0; i < argumentsLength; i++) {
                var name = arguments[i];
                this._elementMap[name] = $('<span class="' + this.widgetFullName + '-' + name + '"></span>');
            }
            return this;
        },

        /*
         * fast helper for injecting elements into the other elements
         *
         * input parameter is a map with the keys being parents
         * and the values being children (either single or an array)
         * such as: this._injectHtml({'parent':['one', 'two', 'three']});
         */
        _injectHtml: function (elements) {
            var parent;
            var child;
            for (var i in elements) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].constructor === Array) {
                        for (var j = 0; elements[i][j]; j++) {
                            parent = this._elementMap[i];
                            child = this._elementMap[elements[i][j]];
                            if (parent && child) {
                                parent.append(child);
                            }
                        }
                    } else {
                        parent = this._elementMap[i];
                        child = this._elementMap[elements[i]];
                        if (parent && child) {
                            parent.append(child);
                        }
                    }
                }
            }
            return this;
        },

        // clears out existing style (if any) and sets the style attribute to the passed parameter
        _setStyle: function (cachedElementKey, style) {
            var element = this._getElement(cachedElementKey);
            if (element) {
                element.removeAttr('style');
                element.attr('style', ''); // bug fix
                element.attr('style', style);
            }
        }

    });

})(this.gensler, jQuery);