'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function howManyCandy(stu: any[]){
  let sizeOfArray: number = stu.length;
  let quantOfCandy: number = 0;

  for (let i = 0; i < sizeOfArray; i++) {
    console.log(`${stu[i].name} has ${stu[i].candies}pcs of candy and his/her age is ${stu[i].age}`);
    quantOfCandy += stu[i].candies;
  };

  return quantOfCandy;
}

function countAgesWithCertainCondition(stu: any[]) {
  let sizeOfArray: number = stu.length;
  let summaAge: number = 0;

  for (let i = 0; i < sizeOfArray; i++) {
    if (stu[i].candies < 5) {
      summaAge += stu[i].age;
    }
  }

  return summaAge;
}

console.log(`\nThey all together have: ${howManyCandy(students)}pcs`);
console.log(`Sum of the age of people who have lass than 5 candies: ${countAgesWithCertainCondition(students)}`);
