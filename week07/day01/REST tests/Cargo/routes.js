'use strict';

class SpaceShip {
  constructor(max) {
    this.caliber25 = 0;
    this.caliber30 = 0;
    this.caliber50 = 0;
    this.maxAmmo = max;
    this.ready = false;
    this.shipStatus = "empty";
  }

  setCurrentShipStatus() {
    let ammoInBoard = this.caliber25 + this.caliber30 + this.caliber50;
    let loadState = Math.floor(ammoInBoard / this.maxAmmo * 1000) / 10;

    switch (true) {
      case (loadState === 0):
        this.shipStatus = "empty";
        break;
      case (loadState === 100):
        this.shipStatus = "full";
        this.ready = true;
        break;
      case (loadState > 100):
        this.shipStatus = "overloaded";
        break;
      default:
        this.shipStatus = `${loadState}%`;
    }
  }
}

let spaceShip = new SpaceShip(12500);

const express = require('express');
const app = express();

app.get('/rocket', (req, res) => {
  spaceShip.setCurrentShipStatus();

  let answer = {
    "caliber25": spaceShip.caliber25,
    "caliber30": spaceShip.caliber30,
    "caliber50": spaceShip.caliber50,
    "shipstatus": spaceShip.shipStatus,
    "ready": spaceShip.ready
  };

  res.json(answer);
});

app.get('/rocket/fill', (req, res) => {
  let answer;

  if (req.query.test) {
    spaceShip = new SpaceShip(12500);
  }

  if (req.query.caliber !== undefined && req.query.amount !== undefined) {
    let caliber = req.query.caliber.substring(1, 3);
    if (['25', '30', '50'].includes(caliber)) {
      let ammoCaliberKey = `caliber${caliber}`;

      spaceShip[ammoCaliberKey] += parseInt(req.query.amount);
      spaceShip.setCurrentShipStatus();

      answer = {
        "received": req.query.caliber,
        "amount": req.query.amount,
        "shipstatus": spaceShip.shipStatus,
        "ready": spaceShip.ready
      };
    } else {
      answer = {
        "error": "Not valid caliber provided"
      };
    }
  } else {
    answer = {
      "error": "No ammo to fill provided"
    };
  }

  res.json(answer);
});

module.exports = app;
