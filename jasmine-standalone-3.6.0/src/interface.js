$(document).ready(function () {
    let thermostat = new Thermostat
    $('#current-temperature').text(thermostat.currentTemperature());
});