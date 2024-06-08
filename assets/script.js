const apiKey = '18e7ae3a1f608e812d465476189f028c'

const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`


// if (baseUrl.ok) {
    fetch(baseUrl)
    .then(resonse)
    console.log(response)
    .catch(`Url is not working, response: ${baseUrl.status}`)
// }

// .then(data) {
//     console.log(JSON.parse(data))
// }

//  Handle the response correctly by using the .then() and .catch() methods.
// 2. Parse the JSON response.
// 3. Improve error handling.