'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

app.use(express.json());
app.use('/static', express.static('static'));
app.use('/views', express.static('views'));

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

let createPostsTableSQL = 'CREATE TABLE IF NOT EXISTS posts (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, url VARCHAR(100) NOT NULL, timestamp TIMESTAMP NOT NULL, score INT NOT NULL, owner VARCHAR(20) NOT NULL, vote_user VARCHAR(420), vote_value VARCHAR(60), display BOOLEAN NOT NULL DEFAULT true);';

conn.query(createPostsTableSQL, function (err, rows) {
  if (err) {
    console.log(err);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/posts', (req, res) => {
  let sql = 'SELECT * FROM posts;';

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    res.json({
      posts: rows
    });
  });
});

app.post('/posts', (req, res) => {
  let sql = `INSERT INTO posts VALUES (null, "${req.body.title}", "${req.body.url}", now(), now(), 0, "${req.headers.username}", null, null, 1);`;

  conn.query(sql, function (err, record) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    
    let post = [{
      "id": record.insertId,
      "title": req.body.title,
      "url": req.body.url,
      "timestamp": Date.now(),
      "last_modified": Date.now(),
      "score": 0,
      "owner": req.headers.username,
      "vote_user": "",
      "vote_value": "",
      "display": 1
    }]

    res.json({
      posts: post,
      report: record,
      error: err
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  let userId = req.headers.username;
  let postId = req.params.id;
  let sql = `SELECT * FROM posts WHERE id = ${postId};`;

  conn.query(sql, function (err, record) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    if (record[0].display) {
      if (record[0].vote_user) {
        if (record[0].vote_user.indexOf(userId) !== -1) {
          let voteUsers = record[0].vote_user.split('|');
          let voteValues = record[0].vote_value.split('|');
          let userVoteIndex = voteUsers.indexOf(userId);

          if (voteValues[userVoteIndex] !== '-1') {
            voteUsers.splice(userVoteIndex, 1);
            record[0].vote_user = voteUsers.join('|');
            voteValues.splice(userVoteIndex, 1);
            record[0].vote_value = voteValues.join('|');
          } else {
            var vote_err = `${voteUsers[userVoteIndex]} has upvoted the post with id#${postId}!`;
          }
        } else {
          record[0].vote_user = record[0].vote_user + `|${userId}`;
          record[0].vote_value = record[0].vote_value + `|-1`;
          record[0].score -= 1;
        }
      } else {
        record[0].vote_user = `${userId}`;
        record[0].vote_value = `-1`;
        record[0].score -= 1;
      }
      sql = `UPDATE posts SET score=${record[0].score}, vote_value="${record[0].vote_value}", vote_user="${record[0].vote_user}" WHERE id=${postId}`;
      conn.query(sql, function (err, record) {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        }
      });
    } else {
      var vote_err = `The post with id#${postId} doesn't exist!`;
    }

    res.json({
      down_voted: record,
      error: vote_err
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  let userId = req.headers.username;
  let postId = req.params.id;
  let sql = `SELECT * FROM posts WHERE id = ${postId};`;

  conn.query(sql, function (err, record) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    if (record[0].display) {
      if (record[0].vote_user) {
        if (record[0].vote_user.indexOf(userId) !== -1) {
          let voteUsers = record[0].vote_user.split('|');
          let voteValues = record[0].vote_value.split('|');
          let userVoteIndex = voteUsers.indexOf(userId);

          if (voteValues[userVoteIndex] !== '1') {
            voteUsers.splice(userVoteIndex, 1);
            record[0].vote_user = voteUsers.join('|');
            voteValues.splice(userVoteIndex, 1);
            record[0].vote_value = voteValues.join('|');
          } else {
            var vote_err = `${voteUsers[userVoteIndex]} has upvoted the post with id#${postId}!`;
          }
        } else {
          record[0].vote_user = record[0].vote_user + `|${userId}`;
          record[0].vote_value = record[0].vote_value + `|1`;
          record[0].score += 1;
        }
      } else {
        record[0].vote_user = `${userId}`;
        record[0].vote_value = `1`;
        record[0].score += 1;
      }
      sql = `UPDATE posts SET score=${record[0].score}, vote_value="${record[0].vote_value}", vote_user="${record[0].vote_user}" WHERE id=${postId};`;
      conn.query(sql, function (err, record) {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        }
      });
    } else {
      var vote_err = `The post with id#${postId} doesn't exist!`;
    }

    res.json({
      up_voted: record,
      error: vote_err
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  let userId = req.headers.username;
  let postId = req.params.id;
  let sql = `SELECT * FROM posts WHERE id = ${postId};`;

  conn.query(sql, function (err, record) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    if (record[0].display) {
      if (record[0].owner === userId || userId === 'admin') {
        record[0].display = false;
        sql = `UPDATE posts SET display=false WHERE id=${postId};`;
        conn.query(sql, function (err, record) {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          }
        });
      } else {
        var del_err = `${userId} is not the owner so couldn't delete the post with id#${postId}!`;
      }
    } else {
      var del_err = `The post with id#${postId} doesn't exist!`;
    }

    res.json({
      deleted: record,
      error: del_err
    });
  });
});

app.put('/posts/:id', (req, res) => {
  let userId = req.headers.username;
  let postId = req.params.id;
  let sql = `SELECT * FROM posts WHERE id = ${postId};`;

  conn.query(sql, function (err, record) {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    if (record[0].display) {
      if (record[0].owner === userId || userId === 'admin') {
        record[0].title = req.body.title;
        record[0].url = req.body.url;
        record[0].last_modified = Date.now();
        sql = `UPDATE posts SET title="${req.body.title}", url="${req.body.url}", last_modified=now() WHERE id=${postId};`;
        conn.query(sql, function (err, record) {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          }
        });
      } else {
        var mod_err = `${userId} is not the owner so couldn't modify the post with id#${postId}!`;
      }
    } else {
      var mod_err = `The post with id#${postId} doesn't exist!`;
    }

    res.json({
      modified: record,
      error: mod_err
    });
  });
});

module.exports = app;
