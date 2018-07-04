'use strict';

require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');

let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

let createTableSQL = 'CREATE TABLE IF NOT EXISTS user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, prefix VARCHAR(20), first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, address VARCHAR(100), height FLOAT, bitcoin_address VARCHAR(50) NOT NULL, color_preference VARCHAR(7) NOT NULL);';

conn.query(createTableSQL, function(err, rows) {
  if (err) {
    console.log(err);
  }
});

function openFile(curPath) {
  try {
    return fs.readFileSync(curPath, 'utf-8');
  }
  
  catch(error) {
    return `\r\n*** Error: Unable to read file - ${curPath} ***`;
  }
}

let fileContent = openFile('users.csv');
let lineContentArray;

if (fileContent.indexOf('Error') === -1) {
  let contentArray = fileContent.split('\r\n');

  for (let i = 0; i < contentArray.length; i++) {
    lineContentArray = contentArray[i].split(',');

    if (lineContentArray[5] === '') {
      lineContentArray[5] = 'null';
    }

    let sql = `INSERT INTO user VALUES (null, "${lineContentArray[1]}", "${lineContentArray[2]}", "${lineContentArray[3]}", "${lineContentArray[4]}", ${lineContentArray[5]}, "${lineContentArray[6]}", "${lineContentArray[7]}")`;

    conn.query(sql, function(err, record) {
      if (err) {
        console.log(err);
      }
    });
  }
} else {
  console.log(fileContent);
}

console.log('Creating table and writing into that could take several minutes (even 5) ...');
conn.end();
