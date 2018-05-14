'use strict';

function sum(num: number) {
  let summa: number = 0;
  for (let i = 1; i < (num + 1); i++) {
    summa += i;
  }
  return summa;
}

console.log(sum(5));
