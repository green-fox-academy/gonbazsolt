'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/doubling/', (req, res) => {
  let message = {};

  if (req.query.input !== undefined) {
    message = {
        "received": req.query.input,
        "result": req.query.input * 2
      };
  } else {
    message = {
        "error": "Please provide an input!"
      };
  }

  res.json(message);
});

app.get('/greeter/', (req, res) => {
  let message = {};

  if (req.query.name !== undefined && req.query.title !== undefined) {
    message = {
        "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
      };
    } else if (req.query.name === undefined && req.query.title === undefined) {
      message = {
        "error": "Please provide both a name and a title!"
      };
    } else if (req.query.name === undefined) {
      message = {
        "error": "Please provide a name!"
      };
    } else {
      message = {
        "error": "Please provide a title!"
      };
    }

  res.json(message);
});

app.get('/appenda/:appendable', (req, res) => {
  let answer = {};

  if (req.params.appendable !== undefined) {
    answer = {
      "appended": req.params.appendable.concat('a')
    }
  }

  res.json(answer);
});

app.get('/appenda/', (req, res) => {
  res.status(404).send('Please provide a word!');
});

app.post('/dountil/:what', (req, res) => {
  let answer = {};
  let numberResult = 0;

  if (req.body.until === undefined) {
    answer = {
      "error": "Please provide a number!"
    }
  } else {
    let untilNumber = req.body.until + 1;
    
    if (req.params.what !== undefined) {
      if (req.params.what === 'sum') {
        for (let i = 0; i < untilNumber; i++) {
          numberResult += i;
        }
      }
      if (req.params.what === 'factor') {
        numberResult = 1;
        for (let i = 1; i < untilNumber; i++) {
          numberResult *= i;
        }
      }
      answer = {
        "result": numberResult
      }
    }
  }

  res.json(answer);
});

app.post('/arrays/', (req, res) => {
  let answer = {};
  let counted;

  if (req.body.numbers !== undefined) {
    switch (req.body.what) {
      case 'sum':
        if (req.body.numbers.length !== 0) {
          counted = 0;
          req.body.numbers.forEach(element => {
            counted += element;
          });
          answer = {
            "result": counted
          }
        } else {
          answer = {
            "error": "Please provide the numbers to could summarize them!"
          }
        }
        break;
      case 'multiply':
        if (req.body.numbers.length !== 0) {
          counted = 1;
          req.body.numbers.forEach(element => {
            counted *= element;
          });
          answer = {
            "result": counted
          }
        } else {
          answer = {
            "error": "Please provide the numbers to could multiply them!"
          }
        }
        break;
      case 'double':
        if (req.body.numbers.length !== 0) {
          counted = [];
          req.body.numbers.forEach(element => {
            counted.push(element * 2);
          });
          answer = {
            "result": counted
          }
        } else {
          answer = {
            "error": "Please provide the numbers to could double each of the elements!"
          }
        }
        break;
      default:
        answer = {
          "error": "Please provide what to do with the numbers!"
        }
    }
  } else {
    answer = {
      "error": "Please provide numbers to could do anything with them!"
    }
  }

  res.json(answer);
});

app.post('/sith/', (req, res) => {
  let answer = {};
  
  if (typeof req.body.text === 'string' && req.body.text !== '') {
    let words = req.body.text.split(' ');
    let start = 0;
    let yodaWords = ['Arrgh.', 'Uhmm.', 'Err..err.err.', 'Whoa.', 'Yuck.', 'Tsk-tsk.', 'Phew.', 'Oops.'];
    
    if (words[words.length - 1][words[words.length - 1].length - 1] !== '.') {
      words[words.length - 1] = words[words.length - 1].concat('.');
    }
    
    for (let i = 0; i < words.length; i++) {
      
      if (words[i][words[i].length - 1] === '.') {
        for (let j = start; j < i + 1; j+=2) {
        
          if (j !== i) {
            let swap = words[j];
            if (swap[0].toUpperCase() === swap[0]) {
              swap = swap.toLowerCase();
              let firstLetter = words[j + 1].slice(0, 1).toUpperCase();
              words[j + 1] = firstLetter.concat(words[j + 1].slice(1, words[j + 1].length));
            }
            if (words[j + 1].endsWith('.')) {
              words[j + 1] = words[j + 1].slice(0, words[j + 1].length - 1);
              swap = swap.concat('.');
            }
            words[j] = words[j + 1];
            words[j + 1] = swap;
          }
        }

        if (req.query.case === undefined) {
          let randNum1 = Math.floor(Math.random() * 2 + 1);
          
          for (let j = 0; j < randNum1; j++) {
            let randNum2 = Math.floor(Math.random() * 8);
            words.splice(i + 1, 0, yodaWords[randNum2]);
            i += 1;
          }
        }

        start = i + 1;
      }
    }

    answer = {
      'sith_text': words.join(' ')
    }
  } else {
    answer = {
      'error': 'Feed me some text you have to, padawan young you are. Hmmm.'
    }
  }

  res.json(answer);
});

app.post('/translate/', (req, res) => {
  let answer = {};

  if (typeof req.body.text === 'string' && req.body.text !== '') {
    if (req.body.lang === 'hu') {
      let teve = req.body.text;
      let length = teve.length;
      let str1;
      let str2;

      for (let i = 0; i < length; i++) {
        let c = teve[i];
        
        if (['a', 'á', 'é', 'í', 'ú', 'u', 'ü', 'ű', 'ó', 'ö', 'ő', 'o', 'e', 'i'].indexOf(c.toLowerCase()) !== -1) {
          str1 = teve.slice(0, i);
          str2 = teve.slice(i, length);
          teve = str1 + c + 'v' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);
          i += 2;
          length += 2;
        }
      }
      answer = {
        'translated': teve,
        'lang': 'teve'
      }
    } else if (req.body.lang === 'en') {
      let gibberish = req.body.text;
      let length = gibberish.length;
      let str1;
      let str2;
      let vowels = ['a', 'u', 'o', 'e', 'i'];

      for (let i = 0; i < length; i++) {
        let c = gibberish[i];
        
        if (vowels.indexOf(c.toLowerCase()) !== -1 && i < length - 1 && vowels.indexOf(gibberish[i + 1].toLowerCase()) !== -1) {
          str1 = gibberish.slice(0, i);
          str2 = gibberish.slice(i, length);
          if (i === 0) {
            gibberish = str1 + 'Idig' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);  
          } else if (i > 1 && gibberish[i - 2] === '.') {
            gibberish = str1 + 'Idig' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);
          } else {
            gibberish = str1 + 'idig' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);
          }
          i += 5;
          length += 4;
        } else if (vowels.indexOf(c.toLowerCase()) !== -1) {
          str1 = gibberish.slice(0, i);
          str2 = gibberish.slice(i, length);
          if (i === 0) {
            gibberish = str1 + 'Idig' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);  
          } else if (i > 1 && gibberish[i - 2] === '.') {
            gibberish = str1 + 'Idig' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);
          } else {
            gibberish = str1 + 'idig' + str2.slice(0, 1).toLowerCase() + str2.slice(1, str2.length);
          }
          i += 4;
          length += 4;
        }
      }
      answer = {
        'translated': gibberish,
        'lang': 'gibberish'
      }
    } else {
      answer = {
        'error': `I can't translate that!`
      }
    }
  } else {
    answer = {
      'error': `I can't translate that!`
    }
  }

  res.json(answer);
});

module.exports = app;
