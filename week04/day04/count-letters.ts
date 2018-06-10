'use strict';

export function letterCount(text: string): Object {
  let counter: Object = {};
  
  for (let i: number = 0; i < text.length; i++) {
    let letter = text[i];
    
    (counter[letter]) ? counter[letter] += 1 : counter[letter] = 1;
  }

  return counter;
}
