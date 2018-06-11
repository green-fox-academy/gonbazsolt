'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 2 and 6 is 8', function (t: any): any {
  t.equal(add(2, 6), 8);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(3, 5, 4), 5);
  t.end();
});

test('max of three: second and 2 of max numbers are the same', function (t: any): any {
  t.equal(maxOfThree(3, 5, 5), 5);
  t.end();
});

test('max of three: second and 2 of non max numbers are the same', function (t: any): any {
  t.equal(maxOfThree(3, 5, 3), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('median: four element [7, 5, 3, 4]', function (t: any): any {
  t.equal(median([7, 5, 3, 4]), 4.5);
  t.end();
});

test('median: four element [7, 5, 3, 4]', function (t: any): any {
  t.equal(median([3, 7, 2, 5, 2, 3, 4, 9]), 3.5);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is viwel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is viwel: A', function (t: any): any {
  t.ok(isVowel('A'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});
