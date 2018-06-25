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

module.exports = app;
