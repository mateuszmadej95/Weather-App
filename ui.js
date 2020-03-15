class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.temp = document.getElementById('w-temp')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.clouds = document.getElementById('w-clouds')
        this.tempMax = document.getElementById('w-tempMax')
        this.wind = document.getElementById('w-wind')
    }
    paint(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.temp.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.clouds.textContent = `Clouds: ${weather.clouds.all}%`;
        this.tempMax.textContent = `Temperature Max: ${weather.main.temp_max}°C`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s`;
    }
}