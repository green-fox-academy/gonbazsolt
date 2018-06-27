'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/test', (req, res) => {
  let queryInputs = [];
  let sql = `SELECT * FROM book_mast WHERE pub_lang = ?;`;

  if (req.query.pub_lang) {
    queryInputs = [req.query.pub_lang];
  }

  conn.query(sql, queryInputs, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    
    res.json({
      book: rows
    });
  });
});

app.get('/test2', (req, res) => {
  let sql = `SELECT book_name FROM book_mast ORDER BY book_name;`;

  conn.query(sql, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    
    let book_names = [];
    rows.forEach(element => {
      book_names.push(element.book_name);
    });

    res.render('book_names', {
      book_names: book_names
    });
  });
});

app.get('/booknames', (req, res) => {
  let sql = `SELECT book_name FROM book_mast ORDER BY book_name;`;

  conn.query(sql, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    
    res.json({
      book_names: rows
    });
  });
});

app.listen(PORT, () => {
  console.log('The server is up and running on port ' + PORT);
});
