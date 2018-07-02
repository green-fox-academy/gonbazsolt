'use strict';

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const colors = ['H', 'S', 'C', 'D'];

module.exports = function whoIsTheWinner(blackHand, whiteHand) {
  let blackCardIndexes = [];
  let whiteCardIndexes = [];
  let winnerStatus = '';
  let isWinner = false;

  function isItAPair(hand) {
    let result = {};
    let handCardValues = [];
    hand.forEach(element => {
      handCardValues.push(element[0]);
    });
    if (handCardValues instanceof Array) {
      handCardValues.forEach(function (v, i) {
        if (!result[v]) {
          result[v] = 1;
        } else {
          result[v]++;
        }
      });
    }
  
    const valueArray = Object.keys(result).filter(key => result[key] === 2);
    if (valueArray.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log('black-pair', isItAPair(blackHand), 'white-pair', isItAPair(whiteHand));

  if (isItAPair(blackHand) || isItAPair(whiteHand)) {
    if (isItAPair(blackHand)) {
      winnerStatus = 'Black wins';
      isWinner = true;
    } else {
      winnerStatus = 'White wins';
      isWinner = true;
    }
  } else {
    blackHand.forEach(element => {
      cards.forEach((card, index) => {
        if (element[0] === card) {
          blackCardIndexes.push(index);
        }
      });
    });
    whiteHand.forEach(element => {
      cards.forEach((card, index) => {
        if (element[0] === card) {
          whiteCardIndexes.push(index);
        }
      });
    });
    blackCardIndexes.sort().reverse();
    whiteCardIndexes.sort().reverse();
  
    console.log('black', blackCardIndexes, 'white', whiteCardIndexes);
  
    for (let i = 0; i < 5; i++) {
      if (!isWinner) {
        if (blackCardIndexes[i] > whiteCardIndexes[i]) {
          winnerStatus = 'Black wins';
          isWinner = true;
          i = 5;
        } else if ( blackCardIndexes[i] < whiteCardIndexes[i]) {
          winnerStatus = 'White wins';
          isWinner = true;
          i = 5;
        }
      }
    }
  }

  if (!isWinner) {
    winnerStatus = 'It\'s a draw';
  }
  return winnerStatus;
}
