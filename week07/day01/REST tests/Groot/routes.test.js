'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes.js');

test('/groot endpoint (query parameter provided) - Content-type ?= JSON && Content-Length ?= 50', (t) => {
  request(app)
    .get('/groot?message=something')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '50')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/groot endpoint (query parameter provided) - status code ?= 200 && response ?= expected', (t) => {
  request(app)
    .get('/groot?message=something')
    .expect(200, { "received": "something", "translated": "I am Groot" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/groot endpoint (query parameter not provided) - Content-type ?= JSON && Content-Length ?= 22', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '22')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/groot endpoint (query parameter not provided) - status code ?= 200 && response ?= expected', (t) => {
  request(app)
    .get('/groot')
    .expect(200, { "error": "I am Groot" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
