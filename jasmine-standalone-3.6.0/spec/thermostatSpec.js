'use strict';

describe('Thermostat', function () {
    let thermostat = new Thermostat();
    it('defaults at 20 degrees', function () {
        expect(thermostat.degrees).toEqual(20);
    });
    it('increases the temperature', function () {
        thermostat.up(6);
        expect(thermostat.degrees).toEqual(26);
    });


});