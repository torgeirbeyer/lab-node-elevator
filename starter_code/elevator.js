"use strict";
const Person = require("./person.js");

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = "";

    this.requests = [];
    this._startId = null;
  }

  start() {
    this._startId = setInterval(() => {
      this.update;
    }, 1000);
  }

  stop() {
    clearInterval(this.startId);
  }
  update() {
    this.log();
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "Up";
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
      this.direction = "Down";
    }
  }
  call() {
    let person = new Person();
    this.requests.push(person);
    console.log(this.requests);
  }
  log() {
    console.log(`Direction: ${this.direction}`, `Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
