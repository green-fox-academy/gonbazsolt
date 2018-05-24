'use strict';

function counter(n: number) {
  console.log(n);
  if (n == 0) {
    return;
  } else {
    counter(n - 1);
  }
}

counter(10);
