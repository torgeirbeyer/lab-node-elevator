"use strict";
const Elevator = require("./elevator.js");
const Person = require("./person.js");

const elevator = new Elevator();

elevator.start();
elevator.floorUp();
elevator.call();
