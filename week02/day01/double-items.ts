'use strict';

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks.forEach(function (element) {
  let tempIndex: number = drinks.indexOf(element);
  drinks[tempIndex] = element + element;
});

console.log(drinks);
