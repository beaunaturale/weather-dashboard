var APIKey = "0ec00862a300db548b59bba29a37fead";
var cityArr = JSON.parse(localStorage.getItem('cityArr')) || []
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
// var iconUrl = "http://openweathermap.org/img/w" + iconcode + ".png";



function getApi(cityValue) {
  // var cityValue = inputCity.value;

  var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityValue + '&appid=' + APIKey

  fetch(geoUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function(geoResults) {
      console.log(geoResults);

    let latitude = geoResults[0].lat;
    let longitude = geoResults[0].lon;
    var newWeatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey
    
    fetch(newWeatherURL)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function(newWeatherResults) {
      console.log(newWeatherResults);
      var cityName = newWeatherResults.city.name
      if (!cityArr.includes(cityName)) {
        cityArr.push(cityName)
        localStorage.setItem('cityArr', JSON.stringify(cityArr))
      }
      
        currentCard.innerHTML = ""
        var currentDay  = newWeatherResults.list[0]
        var currentTime = new Date(currentDay.dt * 1000).toLocaleDateString()
        var currentIcon = currentDay.weather[0].icon
        var currentTemp = Math.floor((parseInt(currentDay.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var currentWind = currentDay.wind.speed + ' mph'
        var currentHumidity = currentDay.main.humidity + '%'
        console.log(currentTime, currentIcon, currentTemp, currentWind, currentHumidity)

        var currentTimeEl = document.createElement("p")
        currentTimeEl.textContent = ""
        currentTimeEl.textContent = `${cityValue} : ${currentTime}`

        var currentIconEl = document.createElement("img")
        currentIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + currentIcon + ".png")
        currentIconEl.setAttribute("width", "50px")
        currentIconEl.textContent = ""
        currentIconEl.textContent = `Current Icon : ${currentIcon}`
        
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
        currentCard.append(currentIconEl)
        currentCard.append(currentTempEl)
        currentCard.append(currentWindEl)
        currentCard.append(currentHumidityEl)

        console.log(currentCard)

        //TODO: CREATE elements for 5 day forecast 

        dayOneCard.innerHTML = ""
        var dayOne  = newWeatherResults.list[1]
        var dayOneDate = new Date(dayOne.dt * 1000).toLocaleDateString()
        var dayOneTemp = Math.floor((parseInt(dayOne.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var dayOneWind = dayOne.wind.speed
        var dayOneHumid = dayOne.main.humidity
        console.log(dayOneDate, dayOneTemp, dayOneWind, dayOneHumid)

        var dayOneDateEl = document.createElement("p")
        dayOneDateEl.textContent = ""
        dayOneDateEl.textContent = `${dayOneDate}`
                
        var dayOneTempEl = document.createElement("p")
        dayOneTempEl.textContent = ""
        dayOneTempEl.textContent = `Temperature : ${dayOneTemp}`
        
        var dayOneWindEl = document.createElement("p")
        dayOneWindEl.textContent = ""
        dayOneWindEl.textContent = `Wind: ${dayOneWind}`
        
        var dayOneHumidEl = document.createElement("p")
        dayOneHumidEl.textContent = ""
        dayOneHumidEl.textContent = `Humidity : ${dayOneHumid}`

        dayOneCard.append(dayOneDateEl)
        dayOneCard.append(dayOneTempEl)
        dayOneCard.append(dayOneWindEl)
        dayOneCard.append(dayOneHumidEl)

        console.log(dayOneCard)


        dayTwoCard.innerHTML = ""
        var dayTwo  = newWeatherResults.list[2]
        var dayTwoTemp = Math.floor((parseInt(dayOne.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var dayTwoWind = dayTwo.wind.speed
        var dayTwoHumid = dayTwo.main.humidity
        console.log(dayTwoTemp, dayTwoWind, dayTwoHumid)
                
        var dayTwoTempEl = document.createElement("p")
        dayTwoTempEl.textContent = ""
        dayTwoTempEl.textContent = `Temperature : ${dayTwoTemp}`
        
        var dayTwoWindEl = document.createElement("p")
        dayTwoWindEl.textContent = ""
        dayTwoWindEl.textContent = `Wind: ${dayTwoWind}`
        
        var dayTwoHumidEl = document.createElement("p")
        dayTwoHumidEl.textContent = ""
        dayTwoHumidEl.textContent = `Humidity : ${dayTwoHumid}`

        dayTwoCard.append(dayTwoTempEl)
        dayTwoCard.append(dayTwoWindEl)
        dayTwoCard.append(dayTwoHumidEl)

        console.log(dayTwoCard)


        dayThreeCard.innerHTML = ""
        var dayThree  = newWeatherResults.list[3]
        var dayThreeTemp = Math.floor((parseInt(dayThree.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var dayThreeWind = dayThree.wind.speed
        var dayThreeHumid = dayThree.main.humidity
        console.log(dayThreeTemp, dayThreeWind, dayThreeHumid)
                
        var dayThreeTempEl = document.createElement("p")
        dayThreeTempEl.textContent = ""
        dayThreeTempEl.textContent = `Temperature : ${dayThreeTemp}`
        
        var dayThreeWindEl = document.createElement("p")
        dayThreeWindEl.textContent = ""
        dayThreeWindEl.textContent = `Wind: ${dayThreeWind}`
        
        var dayThreeHumidEl = document.createElement("p")
        dayThreeHumidEl.textContent = ""
        dayThreeHumidEl.textContent = `Humidity : ${dayThreeHumid}`

        dayThreeCard.append(dayThreeTempEl)
        dayThreeCard.append(dayThreeWindEl)
        dayThreeCard.append(dayThreeHumidEl)

        console.log(dayThreeCard)


        dayFourCard.innerHTML = ""
        var dayFour  = newWeatherResults.list[4]
        var dayFourTemp = Math.floor((parseInt(dayFour.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var dayFourWind = dayFour.wind.speed
        var dayFourHumid = dayFour.main.humidity
        console.log(dayFourTemp, dayFourWind, dayFourHumid)
                
        var dayFourTempEl = document.createElement("p")
        dayFourTempEl.textContent = ""
        dayFourTempEl.textContent = `Temperature : ${dayFourTemp}`
        
        var dayFourWindEl = document.createElement("p")
        dayFourWindEl.textContent = ""
        dayFourWindEl.textContent = `Wind: ${dayFourWind}`
        
        var dayFourHumidEl = document.createElement("p")
        dayFourHumidEl.textContent = ""
        dayFourHumidEl.textContent = `Humidity : ${dayFourHumid}`

        dayFourCard.append(dayFourTempEl)
        dayFourCard.append(dayFourWindEl)
        dayFourCard.append(dayFourHumidEl)

        console.log(dayFourCard)


        dayFiveCard.innerHTML = ""
        var dayFive  = newWeatherResults.list[5]
        var dayFiveTemp = Math.floor((parseInt(dayFive.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
        var dayFiveWind = dayFive.wind.speed
        var dayFiveHumid = dayFive.main.humidity
        console.log(dayFiveTemp, dayFiveWind, dayFiveHumid)
                
        var dayFiveTempEl = document.createElement("p")
        dayFiveTempEl.textContent = ""
        dayFiveTempEl.textContent = `Temperature : ${dayFiveTemp}`
        
        var dayFiveWindEl = document.createElement("p")
        dayFiveWindEl.textContent = ""
        dayFiveWindEl.textContent = `Wind: ${dayFiveWind}`
        
        var dayFiveHumidEl = document.createElement("p")
        dayFiveHumidEl.textContent = ""
        dayFiveHumidEl.textContent = `Humidity : ${dayFiveHumid}`

        dayFiveCard.append(dayFiveTempEl)
        dayFiveCard.append(dayFiveWindEl)
        dayFiveCard.append(dayFiveHumidEl)

        console.log(dayFiveCard)

      }) 
    })

}

// localStorage to keep persistent data
function handleFormSubmit(event) {
  event.preventDefault();
  cityListEl.empty()
  createBtn()
  console.log(event.target.value)
  // reach int the html and grab the el w/ the city input id
  var cityInputEl = $('#city-input');
  // extract its value
  var cityInputVal = event.target.value || cityInputEl.val(); 
  // add a new li to the cityListEl ul list el
  // cityListEl.append(`<li>${cityInputVal}</li>`);
  
  
  getApi(cityInputVal)
  
  // clear the input box
  cityInputEl.val('');

};

// on click - run this function
searchBtnEl.click(handleFormSubmit)

// localStorage.setItem(cityListEl, inputCity)

// let cityList = localStorage.getItem(inputCity)
function createBtn() {

  for (var i = 0; i < cityArr.length; i++) {
    var btn = $('<button>').text(cityArr[i]).val(cityArr[i]).click(handleFormSubmit)
    cityListEl.append(btn)
}
}
createBtn() 

