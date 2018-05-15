'use strict';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(num: number[]) {
  let isSeven: boolean = false;
  
  num.forEach((value) => {
    if (value == 7) {
      isSeven = true;
    }
  });

  if (isSeven) {
    return 'Hoorray';
  } else {
    return 'Noooooo'
  }
}

console.log(containsSeven(numbers));

export = containsSeven;
