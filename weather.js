class Weather {
    constructor(city, country) {
        this.apiKey = '601b14bea543b0dc2a1a199702b0679d';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country
    }
}