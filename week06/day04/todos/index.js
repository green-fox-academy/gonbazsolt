'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    todoArray: todos
  });
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
