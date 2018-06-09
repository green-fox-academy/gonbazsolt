'use strict';

interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

type DominoSides = {
  left: number,
  right: number
}

class Domino implements Comparable{
  valuePairs: DominoSides = {
    left: undefined,
    right: undefined
  }

  constructor (value1: number, value2: number) {
    this.valuePairs.left = value1;
    this.valuePairs.right = value2;
  }

  compareTo(other: Domino): number {

    if (other.valuePairs.left < this.valuePairs.left) {
      return 1;
    } else if (other.valuePairs.left > this.valuePairs.left) {
      return -1;
    } else if (other.valuePairs.right < this.valuePairs.right) {
      return 1;
    } else if (other.valuePairs.right > this.valuePairs.right) {
      return -1;
    }

    return 0;
  }
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));
dominoes.push(new Domino(6, 4));
dominoes.push(new Domino(2, 6));

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

console.log(dominoes);
