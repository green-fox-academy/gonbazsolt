'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

app.use(express.json());
app.use('/static', express.static('static'));

let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

let createPostsTableSQL = 'CREATE TABLE IF NOT EXISTS posts (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, url VARCHAR(100) NOT NULL, timestamp TIMESTAMP NOT NULL, score INT NOT NULL, owner VARCHAR(20) NOT NULL, vote_user VARCHAR(420), vote_value VARCHAR(60), display BOOLEAN NOT NULL DEFAULT true);';

conn.query(createPostsTableSQL, function(err, rows) {
  if (err) {
    console.log(err);
  }
});

app.get('/hello', (req, res) => {
  res.json("hello");
});

module.exports = app;
