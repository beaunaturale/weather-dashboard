var APIKey = "0ec00862a300db548b59bba29a37fead";

var cityFormEl = $('#city-form')
var cityListEl = $('#city-list')
var inputCity = document.querySelector("input");

function getApi() {
  // var queryUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0ec00862a300db548b59bba29a37fead}"
  var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCity + '&appid=' + APIKey

  fetch(geoUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function(geoResults) {
      console.log(geoResults);

    let latitude = geoResults[0].lat;
    let longitude = geoResults[0].lon;
      // do whatever w/ the results
      // extracting the data you want
      // using that data to make a new url(5day forecast)
      // making another api call
    var queryUrl = 'api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey
      // -- then
      // -- extract that new data
      // -- shove it on the screen
    })

}


// use OpenWeatherMap API to retrieve geographical coordinates by city name
// localStorage to keep persistent data

// 5 day weather outlook for 5 cities



function handleFormSubmit(event) {
  event.preventDefault();
  // reach int the html and grabe the el w/ the city input id
  var cityInputEl = $('#city-input');
  // extract its value
  var cityInputVal = cityInputEl.val();

  // add a new li to the cityListEl ul list el
  cityListEl.append(`<li>${cityInputVal}</li>`);

  getApi()


  // clear the input box
  cityInputEl.val('');

};


// on click - run this function
cityFormEl.click(handleFormSubmit)



