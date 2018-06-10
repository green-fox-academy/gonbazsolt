'use strict';

import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('fibonacci, given index: 0', t => {
  let counter = fibonacci(0);
  t.equal(counter, 0);
  t.end();
});

test('fibonacci, given index: 1', t => {
  let counter = fibonacci(1);
  t.equal(counter, 1);
  t.end();
});

test('fibonacci, given index: 5', t => {
  let counter = fibonacci(5);
  t.equal(counter, 5);
  t.end();
});

test('fibonacci, given index: 9', t => {
  let counter = fibonacci(9);
  t.equal(counter, 34);
  t.end();
});
