'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let guestName = 'Guest';
  if (req.query.name !== undefined) {
    guestName = req.query.name;
  }
  res.render('home', {
    name: guestName
  });
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
