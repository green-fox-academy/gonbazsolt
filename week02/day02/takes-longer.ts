'use strict';

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let tempQuote: string = '';

tempQuote = tempQuote.concat(quote.substring(quote.indexOf('It'),quote.indexOf('you')));
tempQuote = tempQuote.concat('always takes longer than ');
tempQuote = tempQuote.concat(quote.substring(quote.indexOf('you')));
quote = tempQuote;

console.log(quote);
