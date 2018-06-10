'use strict';

import { test } from 'tape';
import { Sample } from './sum';

test('test summation with a list of integers', t => {
  const sample: Sample = new Sample();

  var actual: number = sample.sum([1, 4, 6, 9]);
  var expected: number = 20;

  t.equal(actual, expected);
  t.end();
});

test('test summation with empty list', t => {
  const sample: Sample = new Sample();

  var actual: number = sample.sum([]);
  var expected: number = 0;

  t.equal(actual, expected);
  t.end();
});

test('test summation with one element', t => {
  const sample: Sample = new Sample();

  var actual: number = sample.sum([4]);
  var expected: number = 4;

  t.equal(actual, expected);
  t.end();
});

test('test summation with empty list', t => {
  const sample: Sample = new Sample();

  var actual: number = sample.sum([null]);
  var expected: number = 0;

  t.equal(actual, expected);
  t.end();
});

// TSError: Unable to compile TypeScript
// Argument of type 'string[]' is not assignable to parameter of type 'number[]'.
/*test('test summation with a string', t => {
  const sample: Sample = new Sample();

  var actual: number = sample.sum(['hello']);
  var expected: number = 'hello';

  t.equal(actual, expected);
  t.end();
});*/
