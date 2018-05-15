'use strict';

function createRandomArgs() {
  let argsInFunction: any[] = [];
  let possibleOperations: string[] = ['+', '-', '*', '/', '%', 'a', 'b'];
  let possibleOperands: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, '0', '1', '2', '3', '4', '5', '6'];

  let whichOperation: number = Math.floor(Math.random() * 7);
  let whichOperand: number = Math.floor(Math.random() * 38);

  argsInFunction.push(possibleOperations[whichOperation]);
  argsInFunction.push(possibleOperands[whichOperand]);

  whichOperand = Math.floor(Math.random() * 47);
  argsInFunction.push(possibleOperands[whichOperand]);
  
  return argsInFunction;
}

let args: any[] = createRandomArgs();

function calculate(calcArgs: any[]) {
  let result: number;

  if ((typeof calcArgs[1] != 'number') || (typeof calcArgs[2] != 'number')) {
    console.log('At least one of the operands is not valid !!!');
  } else {
      switch (calcArgs[0]) {
        case '+':
          result = calcArgs[1] + calcArgs[2];
          break;
        case '-':
          result = calcArgs[1] - calcArgs[2];
          break;
        case '*':
          result = calcArgs[1] * calcArgs[2];
          break;
        case '/':
          if (calcArgs[2] != 0) {
          result = calcArgs[1] / calcArgs[2];
          } else {
            console.log('Dividing by zero has no meaning !!!');
          }
          break;
        case '%':
          result = calcArgs[1] % calcArgs[2];
          break;
        default:
          console.log('Not valid operation !!!');
          break;
      }
  }
  return result;
}

console.log(`Input params are: ${args[0]} , ${args[1]} (${typeof args[1]}), ${args[2]} (${typeof args[2]})`);
console.log(`Result: ${calculate(args)}`);

export = calculate;
