'use script';

export class Sample {
  sum(listOfNum: number[]): number {
    let summation: number = 0;

    for (let i: number = 0; i < listOfNum.length; i++) {
      summation += listOfNum[i];
    }

    return summation;
  }
}
