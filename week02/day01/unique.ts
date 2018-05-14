'use strict';

function unique(arr) {
  let tempArr: number[] = arr;
  let tempArr2: number[] = [];
  let temp: number;
  let k: number = 0;

  for (let i = tempArr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        temp = tempArr[j + 1];
        tempArr[j + 1] = tempArr[j];
        tempArr[j] = temp;
      }
    }
  }

  k = 0;
  tempArr2[k] = tempArr[0];
  for (let i = 1; i < tempArr.length; i++) {
        if (tempArr2[k] != tempArr[i]) {
      k = tempArr2.push(tempArr[i]) - 1;
    }
  }
  return tempArr2;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
