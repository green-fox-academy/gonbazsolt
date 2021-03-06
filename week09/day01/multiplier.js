
// Create the multiplier function that you can use like this:
let multiplier = (multi) => {
  return (number) => {return number * multi};
}

const duplicator = multiplier(2);

console.log(duplicator(5)); // should log 10
console.log(duplicator(10)); // should log 20

const threeTimes = multiplier(3);

console.log(threeTimes(5)); // should log 15
console.log(threeTimes(100)); // should log 300

//----------------------------------------------------------------

function multiplier2(multi) {
  return this * multi;
}

const duplicator2 = multiplier2.bind(2);

console.log(duplicator2(5)); // should log 10
console.log(duplicator2(10)); // should log 20

const threeTimes2 = multiplier2.bind(3);

console.log(threeTimes2(5)); // should log 15
console.log(threeTimes2(100)); // should log 300
