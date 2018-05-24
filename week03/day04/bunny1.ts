'use strict';

function bunnyEarsCounter(n: number) {
  
  if (n == 0) {
    return 0;
  } else {
    return 2 + bunnyEarsCounter(n - 1);
  }
}

console.log(bunnyEarsCounter(30));
