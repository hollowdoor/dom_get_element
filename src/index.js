import isElement from 'dom-is-element';

export default function getElement(element){
    if(typeof element === 'string'){
        try{
            return document.querySelector(element);
        }catch(e){ throw e; }
    }

    if(isElement(element)) return element;

    if(!!element && typeof element === 'object'){
        if(isElement(element.element)){
            return element.element;
        }else if(isElement(element[0])){
            return element[0];
        }
    }

    throw new TypeError(`value (${element}) in isElement(value)
    is not an element, valid css selector,
    or object with an element property, or index 0.`);

}
