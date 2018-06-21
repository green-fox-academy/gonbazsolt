'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});

app.get('/FinalAnswer/', (req, res) => {
  res.send('42');
});

app.get('/:greet', (req, res) => {
  res.send(req.params.greet);
});

// handle optional parameter syntax: <message>?<object field name>=<object value>
app.get('/greet/:message', (req, res) => {
  console.log(req.query);
  let name = 'Fox';
  if (req.query.name !== undefined) {
    name = req.query.name;
  }
  res.send(`${req.params.message} ${name}`);
});
