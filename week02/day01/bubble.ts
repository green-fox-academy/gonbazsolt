export { };
'use strict';

function bubble(arr) {
  let tempArr: number[] = arr;
  let temp: number;

  for (let i = tempArr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        temp = tempArr[j + 1];
        tempArr[j + 1] = tempArr[j];
        tempArr[j] = temp;
      }
    }
  }

  return tempArr;
}

function advancedBubble(arr: number[], ascOrDesck?: boolean) {
  let tempArr: number[] = bubble(arr);

  if (ascOrDesck && ascOrDesck!=undefined) {
    tempArr = tempArr.reverse();
  }

  return tempArr;
}

console.log(bubble([34, 12, 24, 9, 5]));
console.log(advancedBubble([34, 12, 24, 9, 5]));
