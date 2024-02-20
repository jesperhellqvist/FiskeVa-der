
class WeatherApp {
    constructor() {
        this.weatherAppContainer = document.getElementById('weather-app');
        this.weatherContainer = new WeatherContainer(this.weatherAppContainer);
        this.barometerContainer = new BarometerContainer(this.weatherAppContainer);
        this.fishAnimationContainer = new FishAnimationContainer(this.weatherAppContainer);

        this.getUserPosition();
    }

    getUserPosition() {
        var userPosition = new UserPosition();
        userPosition.locationPromise.then(() => {
            this.getWeather(userPosition.latitude, userPosition.longitude);
            this.getCity(userPosition.latitude, userPosition.longitude);
        }).catch(error => {
            console.log(error);
        });
    }

    getWeather(lat, lon) {
        console.log(lat, lon);
        var weather = new Weather(lat, lon);
        weather.fetchWeather().then(() => {
        
        const weatherData = weather.weather;
        console.log(weatherData);
        const correntTemp = weatherData.current.temperature_2m;
        const correntWind = weatherData.current.wind_speed_10m;
        const correntPressure = weatherData.current.surface_pressure;
        const correntWeather = weatherData.current.weather_code;
        const correntPrecipitation = weatherData.current.precipitation;
        const correntWindDirection = weatherData.current.wind_direction_10m;
        const correntIsDay = weatherData.current.is_day;
        const correntTime = weatherData.current.time;
        
        this.weatherContainer.update(correntTemp, correntWind, correntWindDirection);
        this.barometerContainer.update(correntPressure);
        this.fishAnimationContainer.setFishId(correntPressure);
        
        
        });

    }

    getCity(lat, lon) {
        
        var city = new City(lat, lon);
        city.fetchCity().then(() => {
            this.weatherContainer.updateCity(city.city);
        }).catch(error => {
            console.log(error);
        });
    }



}