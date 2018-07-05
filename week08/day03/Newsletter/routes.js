'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/views', express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/login-form.html'));
});

app.get('/signup', (req, res) => {

  res.json({
    username: req.query.username,
    email: req.query.email
  });
});

module.exports = app;
