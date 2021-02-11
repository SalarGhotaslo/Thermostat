'use strict';

class Thermostat {
  constructor() {
    this.degrees = 20;
    this.psm = true;
  }

  up(number) {
    if ((this.degrees + number > 25) && this.psm === true) {
      throw new Error('Save the planet, max temp of 25');
    }

    if ((this.degrees + number) > 32 && this.psm === false) {
      throw new Error('Max temp is 32');
    }

    this.degrees += number;
  }

  currentTemperature() {
    return this.degrees;

  }

  down(number) {
    if ((this.degrees - number) < 10) {
      throw new Error('This is too low bro!');
    }

    this.degrees -= number;
  }

  powerSavingMode() {
    return this.psm;
  }

  powerSavingModeOn() {
    this.psm = true;
  }

  powerSavingModeOff() {
    this.psm = false;
  }

  reset() {
    this.degrees = 20;
  }

  energyUsage() {
    if (this.degrees < 18) {
      return `low usage`;
    }

    if (this.degrees > 25) {
      return `high usage`;
    }

    return `medium usage`;
  }
}
