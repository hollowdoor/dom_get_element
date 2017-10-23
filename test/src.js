import getElement from '../';

one(document.body);
one('div');
one({element:document.body})
one('div', document.body);
one(null);

function one(v){
    console.log(getElement(v));
}
