'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let answer;
  
  if (req.query.distance !== undefined && req.query.time !== undefined) {
    answer = {
      "distance": req.query.distance,
      "time": req.query.time,
      "speed": req.query.distance / req.query.time
    };
  } else {
    answer = {
      "error": "No time or distance provided"
    };
  }

  res.json(answer);
});

module.exports = app;
