export { };
'use strict';

let numOfItems: number = 11;
let basicArray: number[] = [];
let sum: number = 0;
let avg: number = 0;

for (let i = 0; i < numOfItems; i++) {
  basicArray.push(Math.floor(Math.random() * 100 + 1));
}

for (let i = 0; i < basicArray.length; i++) {
  sum += basicArray[i];
}
avg = Math.floor(sum / basicArray.length * 100)/100;
console.log(`sum of ${numOfItems}pcs random item: ${sum} and the average of them: ${avg}`);
