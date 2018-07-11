'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes.js');

test('/yondu endpoint (query parameter provided) - Content-type ?= JSON && Content-Length ?= 45', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '45')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/yondu endpoint (query parameter provided) - status code ?= 200 && response ?= expected', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect(200, { "distance": "100.0", "time": "10.0", "speed": 10 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/yondu endpoint (query parameter not provided) - Content-type ?= JSON && Content-Length ?= 40', (t) => {
  request(app)
    .get('/yondu')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '40')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/yondu endpoint (query parameter not provided) - status code ?= 200 && response ?= expected', (t) => {
  request(app)
    .get('/yondu')
    .expect(200, { "error": "No time or distance provided" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
