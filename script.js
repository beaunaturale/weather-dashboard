var APIKey = "0ec00862a300db548b59bba29a37fead" ;

var cityFormEl = $('#city-form')
var cityListEl = $('#city-list')

var queryUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0ec00862a300db548b59bba29a37fead}"

// use OpenWeatherMap API to retrieve geographical coordinates by city name
// localStorage to keep persistent data

// 5 day weather outlook for 5 cities

$(function() {

function handleFormSubmit(event) {
  event.preventDefault();
  var cityInputEl = $('input[name="city-input"]').val();

  var cityInputVal = cityInputEl

cityListEl.append('<li>${cityInputVal}</li>');

$('input[name+"city-input"]').val('');

};

cityFormEl.click('submit', handleFormSubmit)

})
