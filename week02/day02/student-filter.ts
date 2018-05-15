export = { };
'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function whoHasMoreThan4Candies(stu: any[]) {
  Object.keys(stu).forEach(index => {
    if (stu[index].candies > 4) {
      console.log(`${stu[index].name}: ${stu[index].candies}`);
    }  
  });
}

function avgCandies(stu: any[]) {
  let allCandy: number = 0;

  Object.keys(stu).forEach(index => {
    allCandy += stu[index].candies;
  });

  return (allCandy / stu.length);
}

whoHasMoreThan4Candies(students);
console.log(`Average quantity of candy: ${avgCandies(students)}`);
