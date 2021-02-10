'use strict';

describe('Thermostat', function () {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('defaults at 20 degrees', function () {
        expect(thermostat.degrees).toEqual(20);
    });
    it('increases the temperature', function () {
        thermostat.up(6);
        expect(thermostat.degrees).toEqual(26);
    });
    it('decreases the temperature', function() {
      thermostat.down(2);
      expect(thermostat.degrees).toEqual(18);
    });

    it('error message if the temperature < 10 degrees', function() {
      expect(function(){thermostat.down(11); }).toThrowError('This is too low bro!');
    });
});
