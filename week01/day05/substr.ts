
'use strict';

function substr(str: string, keyword: string) : number {
  let pos: number = str.indexOf(keyword);
  return pos;
}

console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));
