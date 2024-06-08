const apiKey = '18e7ae3a1f608e812d465476189f028c'
const latitude = '47.6062'
const longitude = '-122.3321'
const searchedCity = document.body.getAttribute('#city-search')

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



// function will create a new div for a recently searched city 

function NewSearchedCity(searchedCity) {
    const newRecentSearch = document.createElement("div")

    newRecentSearch.textContent = searchedCity.value
    
    document.appendChild(newRecentSearch)
    
    console.log(newRecentSearch)
}