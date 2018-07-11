'use strict';

class Food {
  constructor(name, amount, calorie, id) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.calorie = calorie;
  }
}

let calorieTable;

function initCalorieTable(calorieTable) {
  calorieTable = [];
  calorieTable.push(new Food('milk', '100g', 65, 1));
  calorieTable.push(new Food('eggs', '100g', 150, 2));
  calorieTable.push(new Food('tomatoes', '100g', 15, 3));
  calorieTable.push(new Food('beer', '100g', 30, 4));
  calorieTable.push(new Food('bread', '100g', 230, 5));
  calorieTable.push(new Food('chocolate biscuit', '100g', 520, 6));
  calorieTable.push(new Food('roast chicken', '100g', 150, 7));

  return calorieTable;
}

calorieTable = initCalorieTable(calorieTable);

const express = require('express');
const app = express();

app.get('/drax', (req, res) => {

  let answer = {
    "calorieTable": calorieTable,
  };

  res.json(answer);
});

app.post('/drax/add', (req, res) => {
  let answer;

  if (req.query.test) {
    calorieTable = initCalorieTable(calorieTable);
  }

  if (req.query.name !== undefined && req.query.amount !== undefined && req.query.calorie !== undefined) {
    let id = calorieTable.length + 1;
    calorieTable.push(new Food(req.query.name, req.query.amount, req.query.calorie, id));

    answer = {
      "name": req.query.name,
      "amount": req.query.amount,
      "calorie": req.query.calorie,
      "status": "ok",
      "record_id": id
    };
  } else {
    answer = {
      "status": "not ok",
      "error": "One of the required parameter was not provided"
    };
  }

  res.json(answer);
});

app.delete('/drax/:id/delete', (req, res) => {
  let answer;
  let recordExists = false;
  let deleted;

  if (req.query.test) {
    calorieTable = initCalorieTable(calorieTable);
  }

  for (let i = 0; i < calorieTable.length; i++) {
    if (calorieTable[i].id === parseInt(req.params.id)) {
      recordExists = true;
      deleted = {
        'name': calorieTable[i].name,
        'amount': calorieTable[i].amount,
        'calorie': calorieTable[i].calorie
      }

      calorieTable.splice(i, 1);
    }
  }

  if (recordExists) {
    answer = {
      "deleted_record_name": deleted.name,
      "deleted_record_amount": deleted.amount,
      "deleted_record_calorie": deleted.calorie,
      "status": "ok",
      "deleted_record_id": req.params.id
    };
  } else {
    answer = {
      "status": "not ok",
      "error": "Not an existing id was provided"
    };
  }

  res.json(answer);
});

app.put('/drax/:id/change', (req, res) => {
  let answer;
  let recordExists = false;
  let changed;
  let error_message = "Not an existing id was provided";

  if (req.query.test) {
    calorieTable = initCalorieTable(calorieTable);
  }

  for (let i = 0; i < calorieTable.length; i++) {
    if (calorieTable[i].id === parseInt(req.params.id)) {
      if (req.query.amount) {
        recordExists = true;

        let oldAmountOfFood = parseInt(calorieTable[i].amount);
        let newAmountOfFood = parseInt(req.query.amount);

        calorieTable[i].amount = req.query.amount;
        calorieTable[i].calorie = Math.floor(newAmountOfFood / oldAmountOfFood * calorieTable[i].calorie);

        changed = {
          'name': calorieTable[i].name,
          'amount': calorieTable[i].amount,
          'calorie': calorieTable[i].calorie
        }
      } else {
        error_message = "A required query parameter (amount) not provided";
      }
    }
  }

  if (recordExists) {
    answer = {
      "changed_record_name": changed.name,
      "changed_record_amount": changed.amount,
      "changed_record_calorie": changed.calorie,
      "status": "ok",
      "changed_record_id": req.params.id
    };
  } else {
    answer = {
      "status": "not ok",
      "error": error_message
    };
  }

  res.json(answer);
});

module.exports = app;
