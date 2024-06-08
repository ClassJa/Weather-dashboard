const apiKey = '18e7ae3a1f608e812d465476189f028c'

const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`

function retrieveApiDetails() {
    fetch(baseUrl) {
        if(!response.ok) {
            alert(`Url is not working, response: ${response}`)
        }
    }
}
retrieveApiDetails()