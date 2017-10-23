(function () {
'use strict';

function isElement(o){
    var type = typeof Element; //HTMLElement maybe
    return (
    type === "object" || type === 'function'
    ? o instanceof Element
    //DOM2
    : !!o
        && typeof o === "object"
        && o.nodeType === 1 //Definitely an Element
        && typeof o.nodeName==="string"
    );
}

function getElement(element, context){
    if ( context === void 0 ) { context = document; }

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

one(document.body);
one('div');
one({element:document.body});
one('div', document.body);
one(null);

function one(v){
    console.log(getElement(v));
}

}());
//# sourceMappingURL=code.js.map
