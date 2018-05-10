'use strict';

for (let iter: number = 0; iter < 501; iter++) {
  if ( (iter % 2) == 0 ) {
    console.log(`The ${iter / 2 + 1}st/nd/th even number between 0 and 500 is ${iter}`);
  }
}
