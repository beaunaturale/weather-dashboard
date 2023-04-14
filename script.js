var APIKey = "0ec00862a300db548b59bba29a37fead";
var city = []
var cityFormEl = $('#city-form')
var cityListEl = $('#city-list')
var searchBtnEl = $('#searchBtn')
var inputCity = document.querySelector("input");
var currentCard = document.querySelector("#current-weather");
var dayOneCard = document.querySelector('#day1')
var dayTwoCard = document.querySelector('#day2')
var dayThreeCard = document.querySelector('#day3')
var dayFourCard = document.querySelector('#day4')
var dayFiveCard = document.querySelector('#day5')



function getApi() {
  var cityValue = inputCity.value;

  var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityValue + '&appid=' + APIKey

  fetch(geoUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function(geoResults) {
      console.log(geoResults);
      // do whatever w/ the results
      // extracting the data you want
    let latitude = geoResults[0].lat;
    let longitude = geoResults[0].lon;
      // using that data to make a new url(5day forecast)
      // making another api call
    var newWeatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey

    fetch(newWeatherURL)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function(newWeatherResults) {
        console.log(newWeatherResults);

        
        currentCard.innerHTML = ""
        //this is the data for the current day 
        var currentDay  = newWeatherResults.list[0]
        var currentTime = new Date(currentDay.dt * 1000).toLocaleDateString()
        var currentTemp = Math.floor((parseInt(currentDay.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var currentWind = currentDay.wind.speed
        var currentHumidity = currentDay.main.humidity
        console.log(currentTime, currentTemp, currentWind, currentHumidity)
        
        //This is creating the current day card element
        var currentTimeEl = document.createElement("p")
        currentTimeEl.textContent = ""
        currentTimeEl.textContent = `Current Day : ${currentTime}`
        
        var currentTempEl = document.createElement("p")
        currentTempEl.textContent = ""
        currentTempEl.textContent = `Current Temperature : ${currentTemp}`
        
        var currentWindEl = document.createElement("p")
        currentWindEl.textContent = ""
        currentWindEl.textContent = `Current Wind: ${currentWind}`
        
        var currentHumidityEl = document.createElement("p")
        currentHumidityEl.textContent = ""
        currentHumidityEl.textContent = `Current Humidity : ${currentHumidity}`

        currentCard.append(currentTimeEl)
        currentCard.append(currentTempEl)
        currentCard.append(currentWindEl)
        currentCard.append(currentHumidityEl)

        console.log(currentCard)

        //TODO: CREATE elements for 5 day forecast 

        currentCard.innerHTML = ""
        //this is the data for the current day 
        var dayOne  = newWeatherResults.list[1]
        var dayOneTemp = Math.floor((parseInt(dayOne.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var dayOneWind = dayOne.wind.speed
        var dayOneHumid = dayOne.main.humidity
        console.log(dayOneTemp, dayOneWind, dayOneHumid)
        
        //This is creating the day one card element
        // var dayOneEL = document.createElement("p")
        // dayOneEL.textContent = ""
        // dayOneEL.textContent = `Current Day : ${currentTime}`
        
        var dayOneTempEL = document.createElement("p")
        dayOneTempEL.textContent = ""
        dayOneTempEL.textContent = `Temperature : ${dayOneTemp}`
        
        var dayOneWindEl = document.createElement("p")
        dayOneWindEl.textContent = ""
        dayOneWindEl.textContent = `Wind: ${dayOneWind}`
        
        var dayOneHumidEl = document.createElement("p")
        dayOneHumidEl.textContent = ""
        dayOneHumidEl.textContent = `Humidity : ${dayOneHumid}`

        // currentCard.append(currentTimeEl)
        dayOneCard.append(dayOneTempEl)
        dayOneCard.append(dayOneWindEl)
        dayOneCard.append(dayOneHumidEl)

        console.log(dayOneCard)



        //console.log(new Date(currentTime * 1000).toLocaleDateString())
        // -- then
        // -- extract that new data
      // let temperature = newWeatherResults[0].temp;
      // let windSpeed = newWeatherResults[0].wind;
      // let humidity = newWeatherResults[0].humidity;
      //   console.log(temperature, windSpeed, humidity)

      }) 
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
searchBtnEl.click(handleFormSubmit)

localStorage.setItem(cityListEl, inputCity)

let cityList = localStorage.getItem(inputCity)




