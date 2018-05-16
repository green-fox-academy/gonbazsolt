export = { };
'use strict';

declare function require(path: string): any;
const fs = require('fs');

function readTable(tableFile: string) {
  let matrixTicTacToe: number[][] = [ [undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined] ];
  let useThisToCheckWinner: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  
  try {
    let fileContent = fs.readFileSync(tableFile, 'utf-8');
    console.log(fileContent);

    let horInd: number = 0;
    let verInd: number = 0;
    for (let i = 0; i < fileContent.length; i++) {
      if ((fileContent[i] === 'O') || (fileContent[i]) === 'X') {
        if (fileContent[i] === 'O') {
          matrixTicTacToe[horInd][verInd] = 0;
        } else {
          matrixTicTacToe[horInd][verInd] = 1;
        }
        horInd += 1;
        if (horInd > 2) {
          horInd = 0;
          verInd +=1;
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      useThisToCheckWinner[0] += matrixTicTacToe[0][i];
      useThisToCheckWinner[1] += matrixTicTacToe[1][i];
      useThisToCheckWinner[2] += matrixTicTacToe[2][i];
      useThisToCheckWinner[3] += matrixTicTacToe[i][0];
      useThisToCheckWinner[4] += matrixTicTacToe[i][1];
      useThisToCheckWinner[5] += matrixTicTacToe[i][2];
      useThisToCheckWinner[6] += matrixTicTacToe[i][i];
      useThisToCheckWinner[7] += matrixTicTacToe[i][2-i];
    }
    //console.log(matrixTicTacToe);
    //console.log(useThisToCheckWinner);
    return useThisToCheckWinner;
  }

  catch {
    console.log('I can\'t find a valid TicTacToe result table...');
  }
}


function ticTacResult(fileName: string) {
  let whoWon: number [] = [];
  let somebodyWon: boolean = false;
  let i: number = 0;
  let returResult: string = '';
  
  whoWon = readTable(fileName);
  while ((i < 8) && (!somebodyWon)) {
    if ((whoWon[i] === 0) || (whoWon[i] === 3)) {
      somebodyWon = true;
      if (whoWon[i] === 0) {
        returResult = 'O';
      } else {
        returResult = 'X';
      }
    }
    i++;
  }
  if (!somebodyWon) {
    returResult = 'draw';
  }
  return returResult;
}
let whatShouldCheck: string = 'test_tictactoe.txt';

console.log(`And the winner is: ${ticTacResult(whatShouldCheck)}`);
