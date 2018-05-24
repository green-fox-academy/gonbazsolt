'use strict';

function refactorio(n: number) {
  
  if (n == 0) {
    return 1;
  } else {
    return n * refactorio(n - 1);
  }
}

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]
console.log(refactorio(8));
