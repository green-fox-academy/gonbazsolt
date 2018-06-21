'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});

app.get('/FinalAnswer/', (req, res) => {
  res.send('42');
});
