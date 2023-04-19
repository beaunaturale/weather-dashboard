var APIKey = "0ec00862a300db548b59bba29a37fead";
var cityArr = JSON.parse(localStorage.getItem('cityArr')) || []
var cityName = []
var cityListEl = $('#city-list')
var searchBtnEl = $('#searchBtn')
var currentCard = document.querySelector("#current-weather");
var dayOneCard = document.querySelector('#day1')
var dayTwoCard = document.querySelector('#day2')
var dayThreeCard = document.querySelector('#day3')
var dayFourCard = document.querySelector('#day4')
var dayFiveCard = document.querySelector('#day5')


function getApi(cityValue) {

  var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityValue + '&appid=' + APIKey

  fetch(geoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function(geoResults) {

    let latitude = geoResults[0].lat;
    let longitude = geoResults[0].lon;

    var newWeatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey
    
    fetch(newWeatherURL)
    .then(function (response) {
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
        var currentDate = new Date(currentDay.dt * 1000).toLocaleDateString()
        var currentIcon = currentDay.weather[0].icon
        var currentTemp = Math.floor((parseInt(currentDay.main.temp) - 273.15) * 9 / 5 + 32) + '° F'
        var currentWind = currentDay.wind.speed + ' MPH'
        var currentHumidity = currentDay.main.humidity + ' %'

        var currentCityEl = document.createElement("h1")
        currentCityEl.textContent = ""
        currentCityEl.textContent = `${cityName}`

        var currentDateEl = document.createElement("h5")
        currentDateEl.textContent = ""
        currentDateEl.textContent = `${currentDate}`

        var currentIconEl = document.createElement("img")
        currentIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + currentIcon + ".png")
        currentIconEl.setAttribute("width", "50px")
        currentIconEl.textContent = ""
        currentIconEl.textContent = `${currentIcon}`
        
        var currentTempEl = document.createElement("p")
        currentTempEl.textContent = ""
        currentTempEl.textContent = `Temperature: ${currentTemp}`
        
        var currentWindEl = document.createElement("p")
        currentWindEl.textContent = ""
        currentWindEl.textContent = `Wind: ${currentWind}`
        
        var currentHumidityEl = document.createElement("p")
        currentHumidityEl.textContent = ""
        currentHumidityEl.textContent = `Humidity: ${currentHumidity}`

        currentCard.append(currentCityEl)
        currentCard.append(currentDateEl)
        currentCard.append(currentIconEl)
        currentCard.append(currentTempEl)
        currentCard.append(currentWindEl)
        currentCard.append(currentHumidityEl)


        dayOneCard.innerHTML = ""
        var dayOne  = newWeatherResults.list[8]
        var dayOneDate = new Date(dayOne.dt * 1000).toLocaleDateString()
        var dayOneIcon = dayOne.weather[0].icon
        var dayOneTemp = Math.floor((parseInt(dayOne.main.temp) - 273.15) * 9 / 5 + 32) + '° F'
        var dayOneWind = dayOne.wind.speed + ' MPH'
        var dayOneHumid = dayOne.main.humidity + ' %'
        console.log(dayOneDate, dayOneTemp, dayOneWind, dayOneHumid)

        var dayOneDateEl = document.createElement("h5")
        dayOneDateEl.textContent = ""
        dayOneDateEl.textContent = `${dayOneDate}`

        var dayOneIconEl = document.createElement("img")
        dayOneIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png")
        dayOneIconEl.setAttribute("width", "50px")
        dayOneIconEl.textContent = ""
        dayOneIconEl.textContent = `${dayOneIcon}`
                
        var dayOneTempEl = document.createElement("p")
        dayOneTempEl.textContent = ""
        dayOneTempEl.textContent = `Temperature: ${dayOneTemp}`
        
        var dayOneWindEl = document.createElement("p")
        dayOneWindEl.textContent = ""
        dayOneWindEl.textContent = `Wind: ${dayOneWind}`
        
        var dayOneHumidEl = document.createElement("p")
        dayOneHumidEl.textContent = ""
        dayOneHumidEl.textContent = `Humidity: ${dayOneHumid}`

        dayOneCard.append(dayOneDateEl)
        dayOneCard.append(dayOneIconEl)
        dayOneCard.append(dayOneTempEl)
        dayOneCard.append(dayOneWindEl)
        dayOneCard.append(dayOneHumidEl)


        dayTwoCard.innerHTML = ""
        var dayTwo  = newWeatherResults.list[16]
        var dayTwoDate = new Date(dayTwo.dt * 1000).toLocaleDateString()
        var dayTwoIcon = dayTwo.weather[0].icon
        var dayTwoTemp = Math.floor((parseInt(dayTwo.main.temp) - 273.15) * 9 / 5 + 32) + '° F'
        var dayTwoWind = dayTwo.wind.speed + ' MPH'
        var dayTwoHumid = dayTwo.main.humidity + ' %'
        console.log(dayTwoDate, dayTwoTemp, dayTwoWind, dayTwoHumid)

        var dayTwoDateEl = document.createElement("h5")
        dayTwoDateEl.textContent = ""
        dayTwoDateEl.textContent = `${dayTwoDate}`

        var dayTwoIconEl = document.createElement("img")
        dayTwoIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png")
        dayTwoIconEl.setAttribute("width", "50px")
        dayTwoIconEl.textContent = ""
        dayTwoIconEl.textContent = `${dayTwoIcon}`
                
        var dayTwoTempEl = document.createElement("p")
        dayTwoTempEl.textContent = ""
        dayTwoTempEl.textContent = `Temperature: ${dayTwoTemp}`
        
        var dayTwoWindEl = document.createElement("p")
        dayTwoWindEl.textContent = ""
        dayTwoWindEl.textContent = `Wind: ${dayTwoWind}`
        
        var dayTwoHumidEl = document.createElement("p")
        dayTwoHumidEl.textContent = ""
        dayTwoHumidEl.textContent = `Humidity: ${dayTwoHumid}`

        dayTwoCard.append(dayTwoDateEl)
        dayTwoCard.append(dayTwoIconEl)
        dayTwoCard.append(dayTwoTempEl)
        dayTwoCard.append(dayTwoWindEl)
        dayTwoCard.append(dayTwoHumidEl)

        
        dayThreeCard.innerHTML = ""
        var dayThree  = newWeatherResults.list[24]
        var dayThreeDate = new Date(dayThree.dt * 1000).toLocaleDateString()
        var dayThreeIcon = dayThree.weather[0].icon
        var dayThreeTemp = Math.floor((parseInt(dayThree.main.temp) - 273.15) * 9 / 5 + 32) + '° F'
        var dayThreeWind = dayThree.wind.speed + ' MPH'
        var dayThreeHumid = dayThree.main.humidity + ' %'
        console.log(dayThreeDate, dayThreeTemp, dayThreeWind, dayThreeHumid)

        var dayThreeDateEl = document.createElement("h5")
        dayThreeDateEl.textContent = ""
        dayThreeDateEl.textContent = `${dayThreeDate}`

        var dayThreeIconEl = document.createElement("img")
        dayThreeIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png")
        dayThreeIconEl.setAttribute("width", "50px")
        dayThreeIconEl.textContent = ""
        dayThreeIconEl.textContent = `${dayThreeIcon}`
                
        var dayThreeTempEl = document.createElement("p")
        dayThreeTempEl.textContent = ""
        dayThreeTempEl.textContent = `Temperature: ${dayThreeTemp}`
        
        var dayThreeWindEl = document.createElement("p")
        dayThreeWindEl.textContent = ""
        dayThreeWindEl.textContent = `Wind: ${dayThreeWind}`
        
        var dayThreeHumidEl = document.createElement("p")
        dayThreeHumidEl.textContent = ""
        dayThreeHumidEl.textContent = `Humidity: ${dayThreeHumid}`

        dayThreeCard.append(dayThreeDateEl)
        dayThreeCard.append(dayThreeIconEl)
        dayThreeCard.append(dayThreeTempEl)
        dayThreeCard.append(dayThreeWindEl)
        dayThreeCard.append(dayThreeHumidEl)

        
        dayFourCard.innerHTML = ""
        var dayFour  = newWeatherResults.list[32]
        var dayFourDate = new Date(dayFour.dt * 1000).toLocaleDateString()
        var dayFourIcon = dayFour.weather[0].icon
        var dayFourTemp = Math.floor((parseInt(dayFour.main.temp) - 273.15) * 9 / 5 + 32) + '° F'
        var dayFourWind = dayFour.wind.speed + ' MPH'
        var dayFourHumid = dayFour.main.humidity + ' %'
        console.log(dayFourDate, dayFourTemp, dayFourWind, dayFourHumid)
        
        var dayFourDateEl = document.createElement("h5")
        dayFourDateEl.textContent = ""
        dayFourDateEl.textContent = `${dayFourDate}`
        
        var dayFourIconEl = document.createElement("img")
        dayFourIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png")
        dayFourIconEl.setAttribute("width", "50px")
        dayFourIconEl.textContent = ""
        dayFourIconEl.textContent = `${dayFourIcon}`
        
        var dayFourTempEl = document.createElement("p")
        dayFourTempEl.textContent = ""
        dayFourTempEl.textContent = `Temperature: ${dayFourTemp}`
        
        var dayFourWindEl = document.createElement("p")
        dayFourWindEl.textContent = ""
        dayFourWindEl.textContent = `Wind: ${dayFourWind}`
        
        var dayFourHumidEl = document.createElement("p")
        dayFourHumidEl.textContent = ""
        dayFourHumidEl.textContent = `Humidity: ${dayFourHumid}`
        
        dayFourCard.append(dayFourDateEl)
        dayFourCard.append(dayFourIconEl)
        dayFourCard.append(dayFourTempEl)
        dayFourCard.append(dayFourWindEl)
        dayFourCard.append(dayFourHumidEl)

        
        dayFiveCard.innerHTML = ""
        var dayFive  = newWeatherResults.list[39]
        var dayFiveDate = new Date(dayFive.dt * 1000).toLocaleDateString()
        var dayFiveIcon = dayFive.weather[0].icon
        var dayFiveTemp = Math.floor((parseInt(dayFive.main.temp) - 273.15) * 9 / 5 + 32) + '° F'
        var dayFiveWind = dayFive.wind.speed + ' MPH'
        var dayFiveHumid = dayFive.main.humidity + ' %'

        var dayFiveDateEl = document.createElement("h5")
        dayFiveDateEl.textContent = ""
        dayFiveDateEl.textContent = `${dayFiveDate}`

        var dayFiveIconEl = document.createElement("img")
        dayFiveIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png")
        dayFiveIconEl.setAttribute("width", "50px")
        dayFiveIconEl.textContent = ""
        dayFiveIconEl.textContent = `${dayFiveIcon}`
                
        var dayFiveTempEl = document.createElement("p")
        dayFiveTempEl.textContent = ""
        dayFiveTempEl.textContent = `Temperature: ${dayFiveTemp}`
        
        var dayFiveWindEl = document.createElement("p")
        dayFiveWindEl.textContent = ""
        dayFiveWindEl.textContent = `Wind: ${dayFiveWind}`
        
        var dayFiveHumidEl = document.createElement("p")
        dayFiveHumidEl.textContent = ""
        dayFiveHumidEl.textContent = `Humidity: ${dayFiveHumid}`

        dayFiveCard.append(dayFiveDateEl)
        dayFiveCard.append(dayFiveIconEl)
        dayFiveCard.append(dayFiveTempEl)
        dayFiveCard.append(dayFiveWindEl)
        dayFiveCard.append(dayFiveHumidEl)

      }) 
    })
}

function handleFormSubmit(event) {
  event.preventDefault();
  cityListEl.empty()
  createBtn()
  var cityInputEl = $('#city-input');
  var cityInputVal = event.target.value || cityInputEl.val(); 
  
  getApi(cityInputVal)
  
  cityInputEl.val('');
  
};

function createBtn() {

  for (var i = 0; i < cityArr.length; i++) {
    var btn = $('<button>').text(cityArr[i]).val(cityArr[i]).click(handleFormSubmit)
    cityListEl.append(btn)
}
}

searchBtnEl.click(handleFormSubmit)

createBtn() 

