'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let answer;
  
  if (req.query.message !== undefined) {
    answer = {
      "received": req.query.message,
      "translated": "I am Groot"
    };
  } else {
    answer = {
      "error": "I am Groot"
    };
  }

  res.json(answer);
});

module.exports = app;
