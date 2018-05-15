'use strict';

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let checkTheseNumbersIn: number[] = [4, 8, 12, 16];

function checkNums(listOfNums: number[]) {
  let isContainAtCertainPosition: boolean[] = [false, false, false, false];
  let isContainAnyOfThem: boolean = true;

  listOfNums.forEach((value1) => {
    checkTheseNumbersIn.forEach((value2) => {
      if (value1 == value2) {
        isContainAtCertainPosition[checkTheseNumbersIn.indexOf(value2)] = true;
      }
    });
  });

  isContainAtCertainPosition.forEach((value) => {
    if (!value) {
      isContainAnyOfThem = false;
    }
  });

  return isContainAnyOfThem;
}

console.log(checkNums(listOfNumbers));

export = checkNums;
