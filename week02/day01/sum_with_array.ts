'use strict';

function sum(...num: number[]) {
  let result: number = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
}

console.log(sum(2,3,8,10));
