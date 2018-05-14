'use strict';

function factorio(num: number) {
  let summa: number = 1;
  for (let i = 1; i < (num + 1); i++) {
    summa *= i;
  }
  return summa;
}

console.log(factorio(6));
