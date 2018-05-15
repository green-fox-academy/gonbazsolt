'use strict';

function printListToScreen(arg: any[]) {
  let printLineString: string = '';

  console.log('+--------------------+---------------+----------+');
  console.log('| Ingredient         | Needs cooling | In stock |');
  console.log('+--------------------+---------------+----------+');

  Object.keys(arg).forEach(index => {
    printLineString = '';
    printLineString = printLineString.concat('| ');
    printLineString = printLineString.concat(arg[index].name);
    while (printLineString.length < 21) {
      printLineString = printLineString.concat(' ');
    }
    printLineString = printLineString.concat('| ');
    if (arg[index].needs_cooling) {
      printLineString = printLineString.concat('Yes');
    } else {
      printLineString = printLineString.concat('No');
    }
    while (printLineString.length < 37) {
      printLineString = printLineString.concat(' ');
    }
    printLineString = printLineString.concat('| ');
    if (arg[index].in_stock != 0) {
      printLineString = printLineString.concat(arg[index].in_stock);
    } else {
      printLineString = printLineString.concat('-');  
    }
    while (printLineString.length < 48) {
      printLineString = printLineString.concat(' ');
    }
    printLineString = printLineString.concat('|');
    console.log(printLineString);
  });

  console.log('+--------------------+---------------+----------+');
}

let ingredients: any[] = [
  { name: 'vodka', in_stock: 1, needs_cooling: true },
  { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
  { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
  { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
  { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
  { name: 'sugar', in_stock: 0, needs_cooling: false },
  { name: 'lime juice', in_stock: 0, needs_cooling: true },
  { name: 'soda', in_stock: 0, needs_cooling: true }
];

printListToScreen(ingredients);
