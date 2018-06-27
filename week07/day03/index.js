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

app.get('/booknames', (req, res) => {
  let sql = `SELECT book_name FROM book_mast ORDER BY book_name;`;

  conn.query(sql, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    
    res.render('book_names', {
      book_names: rows
    });
  });
});

app.get('/books', (req, res) => {
  let sql = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id;';

  if (req.query.category) {
    sql = sql.substring(0, sql.length - 1);
    sql = sql.concat(` AND cate_descrip = "${req.query.category}";`);
  } 
  
  if (req.query.publisher) {
    sql = sql.substring(0, sql.length - 1);
    sql = sql.concat(` AND pub_name = "${req.query.publisher}";`);
  }

  if (req.query.plt) {
    sql = sql.substring(0, sql.length - 1);
    sql = sql.concat(` AND book_price < ${req.query.plt};`);
  }

  if (req.query.pgt) {
    sql = sql.substring(0, sql.length - 1);
    sql = sql.concat(` AND book_price > ${req.query.pgt};`);
  }

  sql = sql.substring(0, sql.length - 1);
  sql = sql.concat(' ORDER BY book_name;');

  conn.query(sql, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    res.render('books', {
      books: rows
    });
  });
});

app.listen(PORT, () => {
  console.log('The server is up and running on port ' + PORT);
});
