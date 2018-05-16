'use strict';

let randNum1: number = Math.floor(Math.random() * 100);
let randNum2: number = Math.floor(Math.random() * 5);

function isDivisorZero(input: number) {
  if (input === 0) {
    throw new Error('Dividing by zero is not possible !!!');
    //return true;
  } else {
    return false;
  }
}

function division(input1: number, input2: number) {
  if (!isDivisorZero(input2)) {
    return input1 / input2;
  }
}

console.log(`${randNum1} / ${randNum2} =`);
try {
  console.log(division(randNum1,randNum2));
}

catch(error) {
  console.log(error.message);
}

export = {isDivisorZero, division};
