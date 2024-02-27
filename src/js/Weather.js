

class Weather {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;

        this.url_currentWeather = "https://api.open-meteo.com/v1/forecast?latitude=" + this.lat + "&longitude=" + this.lon + "&current=temperature_2m,is_day,precipitation,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms";

        this.url_hourlyWeather = "https://api.open-meteo.com/v1/forecast?latitude=" + this.lat + "&longitude=" + this.lon + "&hourly=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&pressure_unit=hPa&pressure_msl";


        this.currentWeather = {};
        this.hourlyWeather = {};
        this.dailyWeather = {};
    }

    fetchCurrentWeather() {
        return new Promise((resolve, reject) => {
            fetch(this.url_currentWeather)
                .then(response => response.json())
                .then(data => {
                    this.currentWeather = data;
                    resolve(); 
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    fetchHourlyWeather() {
        return new Promise((resolve, reject) => {
            fetch(this.url_hourlyWeather)
                .then(response => response.json())
                .then(data => {
                    this.hourlyWeather = data;
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}