export { };
'use strict';

let numList: number[] = [3, 4, 5, 6, 7];
let numList2: number[] = [3, 4, 5, 6, 7];
let tempList: number[] = [];

numList = numList.reverse();

for (let i = 0; i < numList2.length; i++) {
  tempList.push(numList2[numList2.length - i -1]);
}
numList2 = tempList;

console.log('with built-in method: ' , numList);
console.log('with new array and loop method: ' , numList2);
