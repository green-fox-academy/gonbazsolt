'use strict';

function sumDigits(n: number) {
  n = Math.abs(n);
  
  if (n < 10) {
    return n;
  } else {
    return ((n % 10) + (sumDigits(Math.floor(n / 10))));
  }
}

console.log(sumDigits(-1274556));
