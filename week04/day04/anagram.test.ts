'use strict';

import { test } from 'tape';
import { areAnagramms } from './anagram';

test('test anagram: anagrams, only lowercase letters', t => {
  const actual: boolean = areAnagramms('hello', 'elloh');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase and uppercase but only letters', t => {
  const actual: boolean = areAnagramms('hEllo', 'eLloH');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase letters and non-alphabetic characters', t => {
  const actual: boolean = areAnagramms('he.llo&', '%el&loh £');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase and uppercase letters and non-alphabetic characters', t => {
  const actual: boolean = areAnagramms('% He.llo', '[el LOh#');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase letters and numbers', t => {
  const actual: boolean = areAnagramms('he3ll5o', '1ell8oh');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase and uppercase letters and numbers', t => {
  const actual: boolean = areAnagramms('5h4Ello', 'eL9loH0');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase letters and non-alphabetic characters and numbers', t => {
  const actual: boolean = areAnagramms('h6e.ll2o&', '%el&l3o0h £');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: anagrams, lowercase and uppercase letters and non-alphabetic characters and numbers', t => {
  const actual: boolean = areAnagramms('% 5He.l9lo', '[e3l 5LOh#');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});

test('test anagram: non anagrams', t => {
  const actual: boolean = areAnagramms('% 5vHe.l9lo', '[e3l 5LOh#');
  const expected: boolean = false;

  t.equal(actual, expected);
  t.end();
});
