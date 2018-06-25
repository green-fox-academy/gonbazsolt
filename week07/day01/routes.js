'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = app;
