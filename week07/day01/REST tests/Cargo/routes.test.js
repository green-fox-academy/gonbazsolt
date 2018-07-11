'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes.js');

test('/rocket endpoint - Overall status of the ship', (t) => {
  request(app)
    .get('/rocket')
    .expect('Content-Type', /json/)
    .expect(200, {
      "caliber25": 0,
      "caliber30": 0,
      "caliber50": 0,
      "shipstatus": "empty",
      "ready": false
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (query parameter provided) - Status of the ship', (t) => {
  request(app)
    .get('/rocket/fill?amount=5000&caliber=.25&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "received": ".25",
      "amount": "5000",
      "shipstatus": "40%",
      "ready": false
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (query parameter provided) - Shipstatus is "empty" when its 0%', (t) => {
  request(app)
    .get('/rocket/fill?amount=0&caliber=.25&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "received": ".25",
      "amount": "0",
      "shipstatus": "empty",
      "ready": false
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (query parameter provided) - Shipstatus is "40%" when its 40%', (t) => {
  request(app)
    .get('/rocket/fill?amount=5000&caliber=.30&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "received": ".30",
      "amount": "5000",
      "shipstatus": "40%",
      "ready": false
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (query parameter provided) - Shipstatus is "full" when its 100% && ready ?= true', (t) => {
  request(app)
    .get('/rocket/fill?amount=12500&caliber=.50&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "received": ".50",
      "amount": "12500",
      "shipstatus": "full",
      "ready": true
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (query parameter provided) - Shipstatus is "overloaded" when its above 100%', (t) => {
  request(app)
    .get('/rocket/fill?amount=13000&caliber=.25&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "received": ".25",
      "amount": "13000",
      "shipstatus": "overloaded",
      "ready": false
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (query parameter provided incorrectly) - error response', (t) => {
  request(app)
    .get('/rocket/fill?amount=550&caliber=.55&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "error": "Not valid caliber provided"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/fill endpoint (one of the query parameters not provided) - error response', (t) => {
  request(app)
    .get('/rocket/fill?amount=550&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "error": "No ammo to fill provided"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
