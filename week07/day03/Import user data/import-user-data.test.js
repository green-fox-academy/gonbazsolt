'use strict';

require('dotenv').config();
const test = require('tape');
const mysql = require('mysql');
const fs = require('fs');

let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

let fileContent = fs.readFileSync('users.csv', 'utf-8').split('\r\n');

test('import user data: sql table lines and file records quantity same?', t => {
  let sql = 'SELECT * FROM user ORDER BY id DESC LIMIT 1;';

  conn.query(sql, function(err, record) {
    if (err) {
      console.log(err);
    }
  
    const actual = record[0].id;
    const expected = fileContent.length;

    t.equal(actual, expected);
    t.end();
  });
});

test('import user data: a random record comparing', t => {
  let randIdForRecord = Math.floor(Math.random() * 1000 + 1);
  let sql = `SELECT * FROM user WHERE id=${randIdForRecord};`;
  let lineContent = fileContent[randIdForRecord - 1].split(',');

  conn.query(sql, function(err, record) {
    if (err) {
      console.log(err);
    }
  
    const actual = record[0];
    const expected = {
      id: parseInt(lineContent[0]),
      prefix: lineContent[1],
      first_name: lineContent[2],
      last_name: lineContent[3],
      address: lineContent[4],
      height: parseFloat(lineContent[5]),
      bitcoin_address: lineContent[6],
      color_preference: lineContent[7]
    }

    t.deepEqual(actual, expected);
    t.end();
  });
});
