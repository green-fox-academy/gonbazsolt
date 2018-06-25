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
  } else if (req.query.name === undefined) {
    message = {
        "error": "Please provide a name!"
      };
  } else if (req.query.title === undefined) {
    message = {
        "error": "Please provide a title!"
      };
  } else {
    message = {
      "error": "Please provide both a name and a title!"
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
  let untilNumber = req.body.until + 1;
  let numberResult = 0;

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

  res.json(answer);
});

app.post('/arrays/', (req, res) => {
  let answer = {};
  let counted;

  switch (req.body.what) {
    case 'sum':
      counted = 0;
      req.body.numbers.forEach(element => {
        counted += element;
      });
      answer = {
        "result": counted
      }
      break;
    case 'multiply':
      counted = 1;
      req.body.numbers.forEach(element => {
        counted *= element;
      });
      answer = {
        "result": counted
      }
      break;
    case 'double':
      counted = [];
      req.body.numbers.forEach(element => {
        counted.push(element * 2);
      });
      answer = {
        "result": counted
      }
      break;
    default:
      answer = {
        "error": "Please provide what to do with the numbers!"
      }
  }

  res.json(answer);
});

app.post('/sith/', (req, res) => { 
  let answer = '';
  
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
        let randNum1 = Math.floor(Math.random() * 2 + 1);
        
        for (let j = 0; j < randNum1; j++) {
          let randNum2 = Math.floor(Math.random() * 8);
          words.splice(i + 1, 0, yodaWords[randNum2]);
          i += 1;
        }
        
        start = i + 1;
      }
    }

    answer = words.join(' ');
  } else {
    answer = 'Feed me some text you have to, padawan young you are. Hmmm.'
  }

  res.json(answer);
});

module.exports = app;
