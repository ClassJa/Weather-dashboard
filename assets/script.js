const apiKey = '18e7ae3a1f608e812d465476189f028c'
const latitude = '47.6062'
const longitude = '-122.3321'
const searchedCity = document.getElementById('city-search')
// const submitBtn = document.body.getElementsByClassName('form-sub-btn')
const submitBtn = document.querySelector('.form-sub-btn');
// const formSection = document.body.getElementsByClassName('form-section')
const underForm = document.querySelector('.form-section')
const currForecastDiv = document.getElementsByClassName('searched-city-section')
// const city = searchedCity.value

const currWeather = document.querySelector(".city-search-section")


// pick up here

function fetchForecast(lat, long){

const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`


    fetch(baseUrl)
    .then((response) => response.json())
    // save it to local storage and display
    .then(data => {
        console.log(data, "Found it!");
        console.log(data.list[0].weather);
        // const date = data.list[0].dt_txt}, 
        console.log(data.list[0].weather),
        console.log(data.list[0].dt_txt)
        const containers = document.querySelectorAll('.date')
        
        for (let i = 0; i < containers.length; i++){
            containers[i].setAttribute('class', 'date')
            containers[i].textContent = data.list[i+8].dt_txt
            const cardSection1 = document.createElement('h3')
            cardSection1.textContent = data.list[i].weather[0].main
            cardSection1.setAttribute('class', 'weather-display')
            containers[i].appendChild(cardSection1)
        }

        for (let i=0; i < containers.length; i++){
            // let rain = U+26C6;
            let sun = U+2609;
            if ((data.list[i].weather[i].main) === rain ) {
                cardSection1.textContent += rain
            } else {
                cardSection1.textContent += sun
            }
        }
    
})
    .catch(`Url is not working, response: ${baseUrl.status}`) 

        const weatherHeader = document.createElement('header')
        // currWeather.createElement('header')
        weatherHeader.setAttribute('class', 'date')
        weatherHeader.textContent = JSON.stringify(data.list[0].dt_txt)
        currWeather.appendChild(weatherHeader)

        // function getDate(data) {
        //     console.log(data + "hjkcjdnxbfbecd")
        
        // }
        // getDate(data)
        // return date
}




function setLatandLong(cityName){
    const cityApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    fetch(cityApi)
        .then((response) => response.json())
        .then(data => {
            fetchForecast(data[0].lat, data[0].lon)})
        // replace console.log with data.syntax
        .catch(`Url is not working, response: ${cityApi.status}`)
        // const city = searchedCity.value
    }

// Renders to the aside section recently searched cities by creating a button element for each
// figure out how to have all of the cities entered saved to an array so it can be stored in localStorage and rendered to screen in recently viewed section 
// const cityInputs = JSON.parse('inputCity')
const userInput = [] || cityInputs
function NewSearchedCity() {

    const newRecentSearchBtn = document.createElement('button')
    newRecentSearchBtn.textContent = searchedCity.value
    console.log(searchedCity.value)
    newRecentSearchBtn.setAttribute('class', 'recent-search1')
    
    // don't create a new div, target the precendent 
    underForm.appendChild(newRecentSearchBtn)

    userInput.push(searchedCity.value)
    console.log(userInput)

    
    }

    function init() {
        // renders recently searched buttons globally
        NewSearchedCity()
        storeCityInput()
        // console.log("init")
    }
    init()
    
// submitBtn[0].addEventListener("click", NewSearchedCity);
// newRecentSearchBtn.innerHTML = ''

function clearTextInput() {
    // searchedCity.value = " "
}
// const city = searchedCity.value




submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearTextInput();
    NewSearchedCity();
    storeCityInput();
    fiveDayForecast();
    setLatandLong(searchedCity.value);
});

// submitBtn[0].addEventListener("click", (event) => {
//     event.preventDefault()
//     clearTextInput()
//     NewSearchedCity()
//     storeCityInput()
//     fiveDayForecast()
//     // getDate()
//     // fetchForecast()

//     setLatandLong(searchedCity.value)
//     // console.log(searchedCity.value + 'abc!!!!')
// });

// Stores user inputs of cities into local storage
function storeCityInput() {
    let userInput = document.querySelector('#city-search').value;
    let newSearches = JSON.parse(localStorage.getItem('inputCity')) || [];
    newSearches.push(userInput);
    localStorage.setItem('inputCity', JSON.stringify(newSearches));
}


// Dynamically insert data into the divs that represent the 5-day weather forecast based on entered city 
userSearchDate = '6/10/2024'
// use response.(date)
// change the hard coded date to date of when the user makes the search
function fiveDayForecast(response) {
    console.log(response)
    const date = new Date();
    const todaysDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    console.log(todaysDate)
    let attachedNum;
    for (let i = 1; i < 6; i ++){
        attachedNum = JSON.stringify(i)
        console.log(attachedNum)
        const dateField = document.getElementById(`date${attachedNum}`) 
        console.log(typeof(todaysDate))
        // todaysDate.split(date.getDay()) = attachedNum
        // todaysDate.indexOf(date.getDay()) = attachedNum
        console.log(dateField)
        const fHeader = document.createElement('header')
        fHeader.setAttribute('class', 'date center')
        fHeader.textContent = todaysDate
        dateField.appendChild(fHeader)
        // figure out how to get data from api and place it below
        // forecastHeader.textContent = todaysDate

    }
 
}



function displaySearchInForecastDiv() {
    const forecastHeader = currForecastDiv.createElement('header')

    forecastHeader.textContent = searchedCity.value
    currForecastDiv.appendChild(forecastHeader)
    // figure out how to get this text to show on screen 
}




// uncomment and create below


// fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       renderItems(city, data);
//     })
//     .catch(function (err) {
//       console.error(err);
//     });


//     function renderForecast(list) {


//     }


//     function renderItems(city, data) {
//         renderCurrentWeather(city, data.list[0], data.city.timezone);
//         renderForecast(data.list);
//       }


//     function renderCurrentWeather(city, weather) {
//     const tempF = weather.main.temp;
//     const tempEl = document.createElement('p');
//     tempEl.setAttribute('class', 'card-text');
//     tempEl.textContent = `Temp: ${tempF}°F`;
    
//     const cardBody = document.createElement('div');
//     cardBody.append(tempEl);
//     }


// renderCurrentWeather and renderForecast  have the data you need. 
// the renderCurrentWeather will get the city value as well as the value of the first array item in the data list 
// (e.g. data.list[0]) and the renderForecast  function will get the whole list of forecast (data.list)
// then you can create your elements, set attributes for your elements and set the textContent properties of 
// those elementrs to represent the data you want to display in a particular element (e.g )