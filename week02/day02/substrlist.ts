export { };
'use strict';

function substrlist(checkThisStr: string, inThisArray: string[]) {
  let result: number = -1;

  for (let i = 0; i < inThisArray.length; i++) {
    if (inThisArray[i].indexOf(checkThisStr) != -1) {
      result = i;
    }
  }
  return result;
}

console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
