export { };
'use strict';

function subint(checkThisNum: number, inThisArray: number[]) {
  let resultList: number[] = [];

  for (let i = 0; i < inThisArray.length; i++) {
    if ((checkThisNum == inThisArray[i] / 10) || (checkThisNum == inThisArray[i] % 10)) {
      resultList.push(i);
    }
  }
  return resultList;
}

console.log(subint(1, [1, 11, 34, 52, 61]));
console.log(subint(9, [1, 11, 34, 52, 61]));
