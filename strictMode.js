//undeclared variables
'use strict'
// x=10;
// console.log(x);

//Read-Only properties
const obj={};
Object.defineProperty(obj,'prop',{value:40,writable:false});
obj.prop=100
console.log(obj);

