const apiKey = '18e7ae3a1f608e812d465476189f028c'
const latitude = '47.6062'
const longitude = '-122.3321'
const searchedCity = document.getElementById('city-search')
const submitBtn = document.body.getElementsByClassName('form-sub-btn')
// const formSection = document.body.getElementsByClassName('form-section')
const underForm = document.querySelector('.form-section')
const currForecastDiv = document.getElementsByClassName('searched-city-section')

// console.log(searchedCity)

// create localstorage set up for recent searches so they populate in the aside section of the webpage 
// localStorage.getItem('searched-city')
// localStorage.setItem('searched-city', searchedCity.value)

// console.log(searchedCity.value)



const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

// [47.6062, -122.3321]

// if (baseUrl.ok) {
    fetch(baseUrl)
    .then((response) => response)
    .then((response) => {console.log(response)})
    .catch(`Url is not working, response: ${baseUrl.status}`)
// }

// .then(data) {
//     console.log(JSON.parse(data))
// }

//  Handle the response correctly by using the .then() and .catch() methods.
// 2. Parse the JSON response.
// 3. Improve error handling.


// Renders to the aside section recently searched cities by creating a button element for each

// figure out how to have all of teh cities entered saved to an array so it can be stored in localStorage and rendered to screen in recently viewed section 
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
    newRecentSearchBtn.setAttribute('class', 'recent-search1')
    
    // don't create a new div, target the precendent 
    underForm.appendChild(newRecentSearchBtn)

    userInput.push(searchedCity.value)
    console.log(userInput)

    
    }
    
// submitBtn[0].addEventListener("click", NewSearchedCity);
// newRecentSearchBtn.innerHTML = ''

function clearTextInput() {
    // searchedCity.value = " "
}

submitBtn[0].addEventListener("click", (event) => {
    event.preventDefault()
    clearTextInput()
    NewSearchedCity()
    storeCityInput()
    // fiveDayForecast()
});

// Stores user inputs of cities into local storage
function storeCityInput() {
    let userInput = document.querySelector('#city-search').value;
    let newSearches = JSON.parse(localStorage.getItem('inputCity')) || [];
    newSearches.push(userInput);
    localStorage.setItem('inputCity', JSON.stringify(newSearches));
}



// Dynamically insert data into the divs that represent the 5-day weather forecast based on entered city 
function fiveDayForecast() {
    newSearches = [] || searchedCity
    newSearch = localStorage.setItem('newSearch', newSearches)
    console.log(newSearches)

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