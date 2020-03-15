// init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// init ui
const ui = new UI();


// Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// Change location

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // Change location
    weather.changeLocation(city, country);

    // Set location in local storage
    storage.setLocationData(city, country);

    // Get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
})


function getWeather() {
    weather.getWeather()
        .then(res => {
            ui.paint(res);
        })
        .catch(err => console.log(err))
}