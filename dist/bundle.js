'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isElement = _interopDefault(require('dom-is-element'));

function getElement(element, context){
    if ( context === void 0 ) context = document;

    if(typeof element === 'string'){
        try{
            return context.querySelector(element);
        }catch(e){ throw e; }
    }

    if(isElement(element)) { return element; }

    if(!!element && typeof element === 'object'){
        if(isElement(element.element)){
            return element.element;
        }else if(isElement(element[0])){
            return element[0];
        }
    }

    throw new TypeError(("value (" + element + ") in isElement(value)\n    is not an element, valid css selector,\n    or object with an element property, or index 0."));

}

module.exports = getElement;
//# sourceMappingURL=bundle.js.map
