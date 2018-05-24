'use strict';

function putStarBetweenAdjChars(s: string) {
  
  if (s == '') {
    return '';
  } else {
    if (s.length == 1) {
      return putStarBetweenAdjChars(s.slice(0, s.length - 1)).concat(s.slice(s.length - 1, s.length));
    } else {
      return putStarBetweenAdjChars(s.slice(0, s.length - 1)).concat('*').concat(s.slice(s.length - 1, s.length));
    }
  }
}

console.log(putStarBetweenAdjChars('x-1234-x-123-  -456-xx-123-xxx-12-x-12345'));
