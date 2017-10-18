dom-get-element
=========

Install
----

`npm install --save dom-get-element`

Examples
-----

```javascript
import getElement from 'dom-get-element';

console.log(getElement(document.body)); //body element
console.log(getElement('div')); //the first div element
console.log(getElement({element:document.body})); //body element
console.log(getElement(null)); //throws an error
```

About
----

`getElement(value)` returns an element when passing these values:

* element that is instanceof Element
* object with a property element
* selector that is valid for `document.querySelector(selector)`
* object with a property index 0

When passing an object to `getElement(value)` the `.element` property will be checked first, and then then property of index 0.