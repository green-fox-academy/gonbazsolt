'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];
let itemsToChange: string[] = ['Croissant', 'Ice cream'];

function sweets(sItems: any[]) {
  let tempShopItems: string[] = [];
  
  sItems.forEach((value) => {
    if (typeof value != 'string') {
      value = itemsToChange.shift();
    }
    tempShopItems = tempShopItems.concat(value);
  })
  return tempShopItems;
}

console.log(sweets(shopItems));

export = sweets;
