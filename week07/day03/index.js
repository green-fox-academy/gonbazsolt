'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

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

app.listen(PORT, () => {
  console.log('The server is up and running on port ' + PORT);
});
