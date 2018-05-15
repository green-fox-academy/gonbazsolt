'use strict';

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(g: string[], b: string[]) {
  let pairs: string[] = [];
  while (g.length > 0 || b.length > 0) {
    if (g.length > 0 && b.length > 0) {
      pairs = pairs.concat(g.shift());
      pairs = pairs.concat(b.shift());
    } else if (g.length <= 0) {
      pairs = pairs.concat('unpaired');
      pairs = pairs.concat(b.shift());
    } else {
      pairs = pairs.concat(g.shift());
      pairs = pairs.concat('unpaired');
    }
  }
  return pairs;
}

console.log(makingMatches(girls, boys));

export = makingMatches;
