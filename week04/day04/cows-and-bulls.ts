'use strict';

export type answerCaBObject = {
  cow: number,
  bull: number
}

export type answerObject = {
  answerStr: string,
  answerObj: answerCaBObject
}

export class CaB {
  fourDigitNumberToGuess: number;
  gameStateOn: boolean = true;
  numberOfGuesses: number = 0;
  
  constructor(number: number = undefined) {
    this.fourDigitNumberToGuess = number;
  }

  randomNumber(): void {
    this.fourDigitNumberToGuess = Math.floor(Math.random() * 9000 + 1000);
  }

  guessAnalyze(guess: string): answerObject {
    let fourDigitNumberInString = this.fourDigitNumberToGuess.toString();
    let answer: string = '';
    let temp: string[];
    let answerObject: answerCaBObject = {
      cow: 0,
      bull: 0
    }

    for (let i: number = 0; i < 4; i++)  {
      if (fourDigitNumberInString.indexOf(guess[i]) === i) {
        answer = answer + 'cow';
        answerObject.cow += 1;

        temp = fourDigitNumberInString.split('');
        temp.splice(i, 1, ' ');
        fourDigitNumberInString = temp[0] + temp[1] + temp[2] + temp[3];
      } 
    }  
      
    for (let i: number = 0; i < 4; i++)  {  
      if (fourDigitNumberInString.indexOf(guess[i]) !== -1) {
        (Math.round(Math.random())) ? answer = answer + 'bull' : answer = 'bull' + answer;
        answerObject.bull += 1;

        temp = fourDigitNumberInString.split('');
        temp.splice(fourDigitNumberInString.indexOf(guess[i]), 1, ' ');
        fourDigitNumberInString = temp[0] + temp[1] + temp[2] + temp[3];
      }
    }

    if (answer === 'cowcowcowcow') {
      this.gameStateOn = false;
    }

    this.numberOfGuesses += 1;

    return {answerStr: answer, answerObj: answerObject};
  }
}

let cab: CaB = new CaB(undefined);
cab.randomNumber();

let gameAnswer: object = cab.guessAnalyze('1357');
