'use strict';

function powerN(base: number, powerOn: number) {
  if (powerOn == 0) {
    return 1;
  } else {
    return base * powerN(base, powerOn - 1);
  }
}

console.log(powerN(2, 8));
