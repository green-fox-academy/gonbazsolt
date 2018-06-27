'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes.js');

test('/doubling/ endpoint (with correct input)', (t) => {
  request(app)
    .get('/doubling/?input=5')
    .expect('Content-Type', /json/)
    .expect(200, { "received": 5, "result": 10 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/doubling/ endpoint (without correct input)', (t) => {
  request(app)
    .get('/doubling/?inp=5')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide an input!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (with correct inputs)', (t) => {
  request(app)
    .get('/greeter/?title=student&name=gonba')
    .expect('Content-Type', /json/)
    .expect(200, { "welcome_message": "Oh, hi there gonba, my dear student!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (without name)', (t) => {
  request(app)
    .get('/greeter/?title=student')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a name!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (without title)', (t) => {
  request(app)
    .get('/greeter/?name=gonba')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a title!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (neither name nor title)', (t) => {
  request(app)
    .get('/greeter/')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide both a name and a title!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
