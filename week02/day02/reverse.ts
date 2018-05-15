'use strict';

function reverse(str: string) {
  let tempStr: string = '';

  for (let i = str.length - 1; i > -1; i--) {
    tempStr = tempStr.concat(str[i]);
  }

  return tempStr;
}

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
console.log(reverse(reversed));

export = reverse;
