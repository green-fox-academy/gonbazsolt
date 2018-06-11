'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  pool.sort();
  if (pool.length % 2 === 0) {
    return (pool[pool.length / 2] + pool[pool.length / 2 - 1]) / 2;
  } else {
    return pool[Math.floor((pool.length - 1) / 2)];
  }
}

export function isVowel(c: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].indexOf(c.toLocaleLowerCase()) !== -1;
}

/*function countVowel(input: string, vowel: string): boolean {
  if 
*/
export function translate(hungarian: string): string {
  let teve: string = hungarian;
  let length: number = teve.length;
  let str1: string;
  let str2: string;

  for (let i = 0; i < length; i++) {
    let c: string = teve[i];
    
    if (isVowel(c)) {
      str1 = teve.slice(0, i);
      str2 = teve.slice(i, length);
      teve = str1 + c + 'v' + str2
      i += 2;
      length += 2;
    }
  }
  return teve;
}
