'use strict';

function numberAdder(n: number) {
  
  if (n == 0) {
    return 0;
  } else {
    return n + numberAdder(n - 1);
  }
}

console.log(numberAdder(6));
