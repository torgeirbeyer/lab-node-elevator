"use strict";
const Elevator = require("./elevator.js");
const Person = require("./person.js");

const elevator = new Elevator();
let passenger = new Person("Torgeir", 1, 5);

elevator.start();
elevator.floorUp();
elevator.call(passenger);
elevator._passengersEnter(passenger);
