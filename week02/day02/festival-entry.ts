'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(funcQueue: any[]) {
  let whoCouldEnter: string[] = [];

  Object.keys(funcQueue).forEach(index => {
    if (funcQueue[index].guns != 0) {
      watchlist = watchlist.concat(funcQueue[index].name);
      funcQueue[index] = {};
    } else if (funcQueue[index].alcohol != 0) {
      securityAlcoholLoot += funcQueue[index].alcohol;
      funcQueue[index].alcohol = 0;
      whoCouldEnter.push(funcQueue[index].name);
    } else {
      whoCouldEnter.push(funcQueue[index].name);
    }
  });

  return whoCouldEnter;
}

console.log(securityCheck(queue));

export = securityCheck;
