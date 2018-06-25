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

module.exports = app;
