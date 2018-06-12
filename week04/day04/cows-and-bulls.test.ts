'use strict';
import { CaB, answerCaBObject, answerObject } from './cows-and-bulls';
import { test } from 'tape';

test('CaB class: constructor with number argument', function (t: any): any {
  t.deepEqual(new CaB(5478), {fourDigitNumberToGuess: 5478, gameStateOn: true, numberOfGuesses: 0});
  t.end();
});

test('CaB class: constructor without any argument', function (t: any): any {
  t.deepEqual(new CaB(), {fourDigitNumberToGuess: undefined, gameStateOn: true, numberOfGuesses: 0});
  t.end();
});

test('CaB class: randomNumber() method', function (t: any): any {
  const CaBObject: CaB = new CaB();
  CaBObject.randomNumber();
  const randomNumber: number = CaBObject.fourDigitNumberToGuess; 

  console.log(`Random 4 digit number ?== ${randomNumber}`);
  t.equal(!(isNaN(randomNumber) && (randomNumber >= 1000) && (randomNumber <=9999)), true);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 1 number correctly in the correct place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('5267').answerObj; 
  const expected: answerCaBObject = {cow: 1, bull: 0};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 1 number correctly in the correct place and 1 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('5247').answerObj; 
  const expected: answerCaBObject = {cow: 1, bull: 1};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 1 number correctly in the correct place and 2 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('5243').answerObj; 
  const expected: answerCaBObject = {cow: 1, bull: 2};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 1 number correctly in the correct place and 3 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('3241').answerObj; 
  const expected: answerCaBObject = {cow: 1, bull: 3};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 1 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('2567').answerObj; 
  const expected: answerCaBObject = {cow: 0, bull: 1};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 2 number correctly in the correct place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('1267').answerObj; 
  const expected: answerCaBObject = {cow: 2, bull: 0};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 2 number correctly in the correct place and 1 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('1247').answerObj; 
  const expected: answerCaBObject = {cow: 2, bull: 1};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 2 number correctly in the correct place and 2 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('1243').answerObj; 
  const expected: answerCaBObject = {cow: 2, bull: 2};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 2 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('2517').answerObj; 
  const expected: answerCaBObject = {cow: 0, bull: 2};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 3 number correctly in the correct place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('1264').answerObj; 
  const expected: answerCaBObject = {cow: 3, bull: 0};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 3 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('2417').answerObj; 
  const expected: answerCaBObject = {cow: 0, bull: 3};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 4 number correctly in the correct place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('1234').answerObj; 
  const expected: answerCaBObject = {cow: 4, bull: 0};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, player guessed 4 number correctly in the wrong place', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  const actual: answerCaBObject = CaBObject.guessAnalyze('2413').answerObj; 
  const expected: answerCaBObject = {cow: 0, bull: 4};

  t.deepEqual(actual, expected);
  t.end();
});

test('CaB class: guessAnalyze() method, bullseye guess, gameStateOn property', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  CaBObject.guessAnalyze('1234');

  t.equal(CaBObject.gameStateOn, false);
  t.end();
});

test('CaB class: guessAnalyze() method, number of guesses increase by 1', function (t: any): any {
  const CaBObject: CaB = new CaB(1234);
  CaBObject.guessAnalyze('1243');

  t.equal(CaBObject.numberOfGuesses, 1);
  t.end();
});
