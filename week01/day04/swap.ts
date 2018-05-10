
'use strict';

let a: number = 123;
let b: number = 526;
let temp: number;

console.log(`Variable a: ${a}`);
console.log(`Variable b: ${b}`);

temp = a;
a = b;
b = temp;

console.log('They were swapped');
console.log(`Variable a: ${a}`);
console.log(`Variable b: ${b}`);
