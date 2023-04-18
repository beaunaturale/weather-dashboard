function handleFormSubmit(event) {

  event.preventDefault();
  //cityListEl.empty()
  var cityInputEl = $('#city-input');
  var cityInputVal = event.target.value || cityInputEl.val();

  //cityArr.push(cityInputVal)
  createBtn(cityInputVal)

  getApi(cityInputVal)

  cityInputEl.val('');

};

searchBtnEl.click(handleFormSubmit)

function renderLocalStorage() {
  console.log(cityListEl)
  // button.click(getApi(city))
  for (var i = 0; i < cityArr.length; i++) {
    var btn = $('<button>').text(cityArr[i]).val(cityArr[i]).click(getApi('nashville'))
    cityListEl.append(btn)
  }
}
//access the buttons in the citylstel via value
//listen when that particular button is clicked then call getApi and pass your value(cityName) as a parameter

function createBtn(city) {
  // console.log(cityArr.length)
  var button = document.createElement('button')
  button.textContent = city
  cityListEl.append(button)

  console.log(cityArr)
}

renderLocalStorage()

cityArr.push(cityName);
