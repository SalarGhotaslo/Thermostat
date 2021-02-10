'use strict';

class Thermostat {
    constructor(degrees = 20) {
        this.degrees = degrees
    }
    up(number) {
        this.degrees += number
    }
    down(number) {
      if((this.degrees - number) < 10){
        throw new Error('This is too low bro!')
      }
      this.degrees -= number;
    }
}
