'use strict';

for (let iter: number = 1; iter < 101; iter++) {
  if ( ( (iter % 3) == 0 ) && ( (iter % 5) == 0 ) ) {
    console.log(`FizzBuzz`);
  } else if ( (iter % 3) == 0 ) {
    console.log(`Fizz`);
  } else if ( (iter % 5) == 0 ) {
    console.log(`Buzz`);
  } else {
    console.log(iter);
  }
}
