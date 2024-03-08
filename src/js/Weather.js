

class Weather {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;

        this.url_currentWeather = "https://api.open-meteo.com/v1/forecast?latitude="+ this.lat + "&longitude=" + this.lon + "&current=temperature_2m,is_day,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,pressure_msl,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code&wind_speed_unit=ms&timezone=Europe%2FBerlin&forecast_days=1";


        this.currentWeather = {};
    }

    fetchCurrentWeather() {
        return new Promise((resolve, reject) => {
            // Try to get the weather data from the cache
            caches.match(this.url_currentWeather)
                .then(response => {
                    if (response) {
                        // Cache hit - return the cached response
                        return response.json();
                    } else {
                        // Cache miss - fetch from the network
                        return fetch(this.url_currentWeather)
                            .then(response => response.json());
                    }
                })
                .then(data => {
                    this.currentWeather = data;
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

}