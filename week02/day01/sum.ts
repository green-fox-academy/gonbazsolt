'use strict';

function sum(num1: number, num2: number, num3?:number) {
  let result: number;
  if (num3 === undefined) {
    num3 = 0;
  }
    result = num1 + num2 + num3;
  return result;
}

console.log(sum(2,3,8));
