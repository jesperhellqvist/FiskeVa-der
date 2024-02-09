

class Weather {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
        this.url = "https://api.open-meteo.com/v1/forecast?latitude=" + this.lat + "&longitude=" + this.lon + "&current=temperature_2m,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms";
        this.weather = {};
    }

    fetchWeather() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.weather = data;
                    resolve(); 
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}