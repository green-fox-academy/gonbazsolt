'use strict';

export function areAnagramms(inputString1: string, inputString2: string): boolean {
  let lettersInp1: string[];
  let lettersInp2: string[];

  lettersInp1 = inputString1.toLowerCase().replace(/[^a-z]/g, '').split('').sort();
  lettersInp2 = inputString2.toLowerCase().replace(/[^a-z]/g, '').split('').sort();

  if (lettersInp1.length === lettersInp2.length) {
    for (let i: number = 0; i < lettersInp1.length; i++) {
      if (lettersInp1[i] !== lettersInp2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

//console.log(areAnagramms('?Hello.', 'eh&l oa'));
