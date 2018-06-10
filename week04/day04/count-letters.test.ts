'use strict';

import {test} from 'tape';
import {letterCount} from './count-letters';

test('simple single letter word', t => {
  let counter = letterCount('a');
  t.deepEqual(counter, {a: 1});
  t.end();
});

test('simple multiple same letter word', t => {
  let counter = letterCount('aab');
  t.deepEqual(counter, {a: 2, b: 1});
  t.end();
});

test('empty string', t => {
  let counter = letterCount('');
  t.deepEqual(counter, {});
  t.end();
});

test('simple multiple same letter word and uppercase letters', t => {
  let counter = letterCount('aCabCD');
  t.deepEqual(counter, {a: 2, C: 2, b: 1, D: 1});
  t.end();
});
