'use strict';

export class Domino {
  valuePairs: number[];
  constructor (value1: number, value2: number) {
    this.valuePairs = [value1, value2];
  }
}

function initializeDominoes(quantityOfDominoes: number): Domino[] {
  let dominoes: Domino[] = [];
  let randNum1: number;
  let randNum2: number;
  let prevNum: number;

  for (let i = 0; i < quantityOfDominoes; i++) {
    if (i != 0) {
      randNum1 = prevNum;
    } else {
      randNum1 = Math.floor(Math.random() * 9 + 1);
    }
    randNum2 = Math.floor(Math.random() * 9 + 1);
    dominoes.push(new Domino(randNum1, randNum2));
    prevNum = randNum2;
  }

  return dominoes;
}

function mixDominoes(dominoes: Domino[]) {
  let temp: Domino;
  let fromInd: number;
  let toInd: number;

  for (let i = 0; i < 2 * dominoes.length; i++) {
    fromInd = Math.floor(Math.random() * dominoes.length);
    toInd = fromInd;
    while (toInd == fromInd) {
      toInd = Math.floor(Math.random() * dominoes.length);
    }
    temp = dominoes[fromInd];
    dominoes[fromInd] = dominoes[toInd];
    dominoes[toInd] = temp;
  }
  return dominoes;
}

function printDominoes(dominoes: Domino[]) {
  dominoes.forEach((value) => {
    console.log(value.valuePairs);
  });
}

function sortDominoes(dominoes: Domino[]) {
  let sortedDominoes: Domino[] = [];
  let tempDominoes: Domino[] = [...dominoes];
  let newTempDominoes: Domino[] = [...dominoes];
  let curLength: number = 0;
  let searchResult: any[] = [];
  let wasMovement: boolean = true;

  curLength = sortedDominoes.push(tempDominoes[0]);
  newTempDominoes.shift();
  tempDominoes.shift();

  while (wasMovement) {
    wasMovement = false;
    for (let i = 0; i < tempDominoes.length; i++) {
      if (tempDominoes[i].valuePairs[0] == sortedDominoes[curLength - 1].valuePairs[1]) {
        curLength = sortedDominoes.push(tempDominoes[i]);
        newTempDominoes.splice(newTempDominoes.indexOf(tempDominoes[i]), 1);
        wasMovement = true;
      } else if (tempDominoes[i].valuePairs[1] == sortedDominoes[0].valuePairs[0]) {
        curLength = sortedDominoes.unshift(tempDominoes[i]);
        newTempDominoes.splice(newTempDominoes.indexOf(tempDominoes[i]), 1);
        wasMovement = true;
      } else {
        for (let j = 0; j < curLength - 1; j++) {
          if ((sortedDominoes[j].valuePairs[1] == tempDominoes[i].valuePairs[0]) &&
              (sortedDominoes[j + 1].valuePairs[0] == tempDominoes[i].valuePairs[1])) {
            sortedDominoes.splice(j + 1, 0, tempDominoes[i]);
            newTempDominoes.splice(newTempDominoes.indexOf(tempDominoes[i]), 1);
            j = curLength - 1;
            wasMovement = true;
          }
        }
      }
    }
    tempDominoes = [...newTempDominoes];
  }
  console.log('no connection (with this algorithm) for these:');
  printDominoes(newTempDominoes);
  console.log('and the new sequence:');
  return sortedDominoes;
}

let dominoes = initializeDominoes(12);

console.log('chain of dominoes was generated:');
printDominoes(dominoes);
console.log('it was mixed:');
printDominoes(mixDominoes(dominoes));
console.log('a new chain was generated:');
printDominoes(sortDominoes(dominoes));
