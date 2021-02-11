'use strict';

describe('Thermostat', function () {
    let thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
      });

    it('defaults at 20 degrees', function () {
        expect(thermostat.currentTemperature()).toEqual(20);
      });

    it('increases the temperature', function () {
        thermostat.up(4);
        expect(thermostat.currentTemperature()).toEqual(24);
      });

    it('decreases the temperature', function () {
        thermostat.down(2);
        expect(thermostat.currentTemperature()).toEqual(18);
      });

    it('error message if the temperature < 10 degrees', function () {
        expect(function () { thermostat.down(11); }).toThrowError('This is too low bro!');
      });

    it('turns power saving mode on', function () {
        thermostat.powerSavingModeOn();
        expect(thermostat.powerSavingMode()).toEqual(true);
      });

    it('turns power saving mode off', function () {
        thermostat.powerSavingModeOff();
        expect(thermostat.powerSavingMode()).toEqual(false);
      });

    it('throws an error when power saving mode is on and above 25 degrees', function () {
        thermostat.powerSavingModeOn();
        expect(function () { thermostat.up(6); }).toThrowError('Save the planet, max temp of 25');
      });

    it('throws an error when power saving mode is off and above 32 degrees', function () {
        thermostat.powerSavingModeOff();
        expect(function () { thermostat.up(13); }).toThrowError('Max temp is 32');
      });

    it('defaults power saving mode to be on', function () {
        expect(thermostat.powerSavingMode()).toEqual(true);
      });

    it('resets the temprature back to the default of 20 degrees', function () {
        thermostat.up(3);
        thermostat.reset();
        expect(thermostat.currentTemperature()).toEqual(20);
      });

    describe('Energy usage', function () {
        it('shows low usage if < 18 degrees', function () {
            thermostat.down(3);
            expect(thermostat.energyUsage()).toEqual(`low usage`);
          });

        it('shows medium usage if <=25 & >=18 degrees', function () {
            expect(thermostat.energyUsage()).toEqual(`medium usage`);
          });

        it('shows high usage if >25 degrees', function () {
            thermostat.powerSavingModeOff();
            thermostat.up(7);
            expect(thermostat.energyUsage()).toEqual(`high usage`);
          });
      });
  });
