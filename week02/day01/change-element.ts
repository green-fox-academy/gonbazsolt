'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];
let newNumList: number[];

newNumList = numList.map(function (element) {
  if (element == 8) {
    return 4;
  }
  return element;
});

console.log('original array:', numList);
console.log('an element/s (value = 8) was modified to 4:', newNumList );
