'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hello Green Fox',
    text: 'Welcome gonba !!!',
    showText: false
  });
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
