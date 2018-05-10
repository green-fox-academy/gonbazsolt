export {};
'use strict';

let a: number = 3;
console.log('make 3 bigger by 10');
console.log(a + 10);

let b: number = 100;
console.log('make 100 smaller by 7');
console.log(b - 7);

let c: number = 44;
console.log('double 44\'s value');
console.log(c * 2);

let d: number = 125;
console.log('divide 125\'s value by 5');
console.log(d / 5);

let e: number = 8;
console.log('what\'s the cube of 8\'s value?');
console.log(e ** 3);

let f1: number = 123;
let f2: number = 345;
console.log(`tell if ${f1} is bigger than ${f2} (as a boolean)`);
console.log((f1 > f2));

let g1: number = 350;
let g2: number = 200;
console.log(`tell if the double of ${g2} is bigger than ${g1} (as a boolean)`);
console.log(((g2 * 2) > g1));

let h: number = 1357988018575474;
console.log(`tell if ${h} has 11 as a divisor (as a boolean)`);
console.log(((h %= 11) == 0) + ` remainder: ${h %= 11}`);

let i1: number = 10;
let i2: number = 3;
console.log(`tell if ${i1} is higher than ${i2} squared and smaller than ${i2} cubed (as a boolean)`);
console.log( ( (i1 > i2 ** 2) && (i1 < i2 ** 3) ) );

let j: number = 1521;
console.log(`tell if ${j} is dividable by 3 or 5 (as a boolean)`);
console.log( ( (j % 3 == 0) || (j % 5) ) + ` remainder divided by 3:${j % 3} remainder divided by 5:${j % 5}`);

let k: string = 'Apple';
console.log(`fill the word:${k} with its content 4 times`);
console.log(k + k + k + k);
