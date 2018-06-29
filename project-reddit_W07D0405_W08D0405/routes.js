'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use('/static', express.static('static'));

app.get('/hello', (req, res) => {
  res.json("hello");
});

module.exports = app;
