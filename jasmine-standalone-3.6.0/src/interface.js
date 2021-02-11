$(document).ready(function () {
    let thermostat = new Thermostat;
    updateTemperature();

    $('#up').on('click', function () {
        thermostat.up(1);
        updateTemperature();
    });

    $('#down').click(function () {
        thermostat.down(1);
        updateTemperature();
    });

    $('#temperature-reset').click(function () {
        thermostat.reset();
        updateTemperature();
    });

    $('#powerSavingModeOn').click(function () {
        thermostat.powerSavingModeOn();
        $('#power-saving-mode').text('on');
        updateTemperature();
    });

    $('#powerSavingModeOff').click(function () {
        thermostat.powerSavingModeOff();
        $('#power-saving-mode').text('off')
        updateTemperature();
    });


    function updateTemperature() {
        $('#current-temperature').text(thermostat.currentTemperature());
        $('#power-usage').text(thermostat.energyUsage());
    }


});
