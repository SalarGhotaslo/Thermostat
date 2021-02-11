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

    function updateTemperature() {
      $('#current-temperature').text(thermostat.currentTemperature());
    }

  });
