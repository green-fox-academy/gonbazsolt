'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes.js');

test('/drax endpoint - Get the calorie table records back', (t) => {
  request(app)
    .get('/drax')
    .expect('Content-Type', /json/)
    .expect(200, {
      "calorieTable": [
        {
          "id": 1,
          "name": "milk",
          "amount": "100g",
          "calorie": 65
        },
        {
          "id": 2,
          "name": "eggs",
          "amount": "100g",
          "calorie": 150
        },
        {
          "id": 3,
          "name": "tomatoes",
          "amount": "100g",
          "calorie": 15
        },
        {
          "id": 4,
          "name": "beer",
          "amount": "100g",
          "calorie": 30
        },
        {
          "id": 5,
          "name": "bread",
          "amount": "100g",
          "calorie": 230
        },
        {
          "id": 6,
          "name": "chocolate biscuit",
          "amount": "100g",
          "calorie": 520
        },
        {
          "id": 7,
          "name": "roast chicken",
          "amount": "100g",
          "calorie": 150
        }
      ]
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/add endpoint (all query parameters provided correctly) - Add a new record to the calorie table', (t) => {
  request(app)
    .post('/drax/add?name=bananas&amount=50g&calorie=40&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "name": "bananas",
      "amount": "50g",
      "calorie": "40",
      "status": "ok",
      "record_id": 8
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/add endpoint (not all the query parameters provided correctly) - Add a new record to the calorie table', (t) => {
  request(app)
    .post('/drax/add?name=bananas&calorie=40&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "status": "not ok",
      "error": "One of the required parameter was not provided"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/delete endpoint (existed id) - Delete a record from the calorie table', (t) => {
  request(app)
    .delete('/drax/3/delete?test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "deleted_record_name": "tomatoes",
      "deleted_record_amount": "100g",
      "deleted_record_calorie": 15,
      "status": "ok",
      "deleted_record_id": "3"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/delete endpoint (not existed id) - Delete a record from the calorie table', (t) => {
  request(app)
    .delete('/drax/9/delete?test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "status": "not ok",
      "error": "Not an existing id was provided"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/change endpoint (existed id, query parameter provided) - Change a record content in the calorie table', (t) => {
  request(app)
    .put('/drax/6/change?amount=200g&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "changed_record_name": "chocolate biscuit",
      "changed_record_amount": "200g",
      "changed_record_calorie": 1040,
      "status": "ok",
      "changed_record_id": "6"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/change endpoint (existed id, query parameter not provided) - Change a record content in the calorie table', (t) => {
  request(app)
    .put('/drax/6/change?test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "status": "not ok",
      "error": "A required query parameter (amount) not provided"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/drax/change endpoint (not existed id) - Change a record content in the calorie table', (t) => {
  request(app)
    .put('/drax/9/change?amount=200g&test=true')
    .expect('Content-Type', /json/)
    .expect(200, {
      "status": "not ok",
      "error": "Not an existing id was provided"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
