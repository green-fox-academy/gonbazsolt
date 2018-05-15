'use strict';

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(inpStr: string[]) {
  for (let i = 0; i < inpStr.length; i++) {
    inpStr[i] = inpStr[i].concat('a');
  }
  return inpStr;
}

console.log(appendA(far));

export = appendA;
