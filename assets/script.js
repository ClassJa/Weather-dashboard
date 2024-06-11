const apiKey = '18e7ae3a1f608e812d465476189f028c'
const latitude = '47.6062'
const longitude = '-122.3321'
const searchedCity = document.getElementById('city-search')
const submitBtn = document.body.getElementsByClassName('form-sub-btn')
// const formSection = document.body.getElementsByClassName('form-section')
const underForm = document.querySelector('.form-section')
const currForecastDiv = document.getElementsByClassName('searched-city-section')
// const city = searchedCity.value

const currWeather = document.querySelector(".city-search-section")




function fetchForecast(lat, long){

const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`


// if (baseUrl.ok) {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {console.log(data, "Found it!"); console.log(data.list[0].weather); console.log(data.list[0].dt_txt)
})
    .catch(`Url is not working, response: ${baseUrl.status}`)

        const weatherHeader = document.createElement('header')
        // currWeather.createElement('header')
        weatherHeader.setAttribute('class', 'date')
        weatherHeader.textContent = data.list[0].dt_txt
        currWeather.appendChild(weatherHeader)
        


}



// function handleSearch(e){
//     e.preventDefault()
//     const city = searchedCity.value

// }


function setLatandLong(cityName){
    const cityApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    fetch(cityApi)
        .then((response) => response.json())
        .then((data) => {fetchForecast(data[0].lat, data[0].lon)})
        // replace console.log with data.syntax
        .catch(`Url is not working, response: ${cityApi.status}`)
        // const city = searchedCity.value
    }

// Renders to the aside section recently searched cities by creating a button element for each
// figure out how to have all of the cities entered saved to an array so it can be stored in localStorage and rendered to screen in recently viewed section 
// const cityInputs = JSON.parse('inputCity')
const userInput = [] || cityInputs
function NewSearchedCity() {
    // e.preventDefault();
    // clearTextInput()
    // newRecentSearchBtn.textContent = ''
    // create a for-loop that starts off by clearing the form field input 
    // seek guidance 
    // searchedCity.textContent = " "
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

submitBtn[0].addEventListener("click", (event) => {
    event.preventDefault()
    clearTextInput()
    NewSearchedCity()
    storeCityInput()
    fiveDayForecast()
    // fetchForecast()

    setLatandLong(searchedCity.value)
    // console.log(searchedCity.value + 'abc!!!!')
});

// Stores user inputs of cities into local storage
function storeCityInput() {
    let userInput = document.querySelector('#city-search').value;
    let newSearches = JSON.parse(localStorage.getItem('inputCity')) || [];
    newSearches.push(userInput);
    localStorage.setItem('inputCity', JSON.stringify(newSearches));
}


// Dynamically insert data into the divs that represent the 5-day weather forecast based on entered city 
userSearchDate = '6/10/2024'
// change the hard coded date to date of when the user makes the search
function fiveDayForecast() {
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
    // dateField.appendChild(fHeader)
    
    // newSearches = [] || searchedCity
    // newSearch = localStorage.setItem('newSearch', newSearches)
    // console.log(newSearches)

}



function displaySearchInForecastDiv() {
    const forecastHeader = currForecastDiv.createElement('header')

    forecastHeader.textContent = searchedCity.value
    currForecastDiv.appendChild(forecastHeader)
    // figure out how to get this text to show on screen 
}

// function NewSearchedCity(e) {
//     e.preventDefault;
    // const newRecentSearch = document.createElement("div")

    // newRecentSearch.innerHTML = searchedCity.value
    // newRecentSearch.createElement('<h2>')
    // newRecentSearch.textContent = searchedCity.value;
    
    // newRecentSearch.appendChild(newRecentSearch)


    // const container = document.getElementsByClassName("form-section");
    // container.appendChild(newRecentSearch);
    
    // console.log(newRecentSearch.value)
    // console.log(newRecentSearch.textContent)
//     console.log("Check here")
// }
//     submitBtn[0].addEventListener("click", NewSearchedCity);