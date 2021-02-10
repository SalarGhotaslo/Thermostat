'use strict';

class Thermostat {
    constructor(degrees = 20) {
        this.degrees = degrees
    }
    up(number) {
        this.degrees += number
    }

}