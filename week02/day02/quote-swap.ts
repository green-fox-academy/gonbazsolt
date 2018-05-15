'use strict';

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(w: string[]) {
  let lengthOfArray: number = w.length;
  let wordsTogether: string = '';
  let swapTemp: string;
  
  swapTemp = w[2];
  w[2] = w[5];
  w[5] = swapTemp;

  for (let i = 0; i < lengthOfArray - 1; i++) {
    wordsTogether = wordsTogether.concat(w[i]).concat(' ');
  }
  wordsTogether = wordsTogether.concat(w[lengthOfArray - 1]);

  return wordsTogether;
}

console.log(quoteSwap(words));

export = quoteSwap;
