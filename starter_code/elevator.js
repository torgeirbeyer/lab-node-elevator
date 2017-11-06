"use strict";

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = "";

    this.requests = [];
    this.passengers = [];
    this.waitingList = [];
    this._startId = null;
  }

  start() {
    this._startId = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    setTimeout(() => {
      if (this.requests === this.floor) {
        clearInterval(this.startId);
      }
    });
  }

  update() {
    this.log();
  }

  _passengersEnter(passenger) {
    if (this.floor === this.requests) {
      this.stop();
      this.passengers.push(passenger.name);
      this.waitingList.shift();
      this.requests.push(passenger.destinationFloor);
    }
    console.log(
      `${passenger.name} entered the elevator at floor ${passenger.originFloor}`
    );
  }

  _passengersLeave(passenger) {
    if (passenger.destinationFloor === this.floor) {
      this.stop();
      this.passengers.shift();
    }
    console.log(`${person.name} has left the elevator`);
  }

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

  call(passenger) {
    this.waitingList.push(passenger);
    this.requests.push(passenger.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction}`, `Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
