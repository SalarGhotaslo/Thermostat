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
    $('#power-saving-mode').text('off');
    updateTemperature();
  });
  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#second-temperature').text(data.main.temp);
    })
  }

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#current-temperature').text(thermostat.currentTemperature());
    $('#power-usage').text(thermostat.energyUsage());
    $('#power-usage').attr('class', thermostat.energyUsage());
    $('#current-temperature').attr('class', thermostat.energyUsage());
  }

});
