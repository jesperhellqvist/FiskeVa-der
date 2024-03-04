
class WeatherApp {
    constructor() {
        this.currentWeatherContainer = document.getElementById('current-weather');
        this.hourlyWeatherContainer = document.getElementById('hourly-weather');
        this.forecastWeatherContainer = document.getElementById('forecast-weather');
        this.loadingSreen = document.getElementById('loadingScreen');



        this.weatherContainer = new WeatherContainer(this.currentWeatherContainer);
        this.barometerContainer = new BarometerContainer(this.currentWeatherContainer);
        this.fishAnimationContainer = new FishAnimationContainer(this.currentWeatherContainer);
        this.hourlyWeather = new HourlyWeather(this.hourlyWeatherContainer);
        this.getUserPosition();
    }

    getUserPosition() {
        var userPosition = new UserPosition();
        userPosition.locationPromise.then(() => {
            this.getWeather(userPosition.latitude, userPosition.longitude);
            this.getCity(userPosition.latitude, userPosition.longitude);
            //this.getHourlyWeather(userPosition.latitude, userPosition.longitude);
        }).catch(error => {
            console.log(error);
        });
    }

    getWeather(lat, lon) {
        console.log(lat, lon);
        var weather = new Weather(lat, lon);
        weather.fetchCurrentWeather().then(() => {
            this.loadingSreen.style.display = 'none';
            this.currentWeatherContainer.style.display = 'flex';



            const hourlyWeather = weather.currentWeather.hourly;
            const weatherData = weather.currentWeather;
            const correntTemp = weatherData.current.temperature_2m;
            const correntWind = weatherData.current.wind_speed_10m;
            const correntPressure = weatherData.current.pressure_msl;
            const correntWeather = weatherData.current.weather_code;
            const correntWindDirection = weatherData.current.wind_direction_10m;
            const correntIsDay = weatherData.current.is_day;
            const correntTime = weatherData.current.time;

            this.weatherContainer.update(correntTemp, correntWind, correntWindDirection);
            this.barometerContainer.update(correntPressure);
            this.fishAnimationContainer.setFishId(correntPressure);
            this.weatherContainer.setBackGround(correntWeather);
            this.hourlyWeather.createHourlyWeather(hourlyWeather);


        });

    }

    // getHourlyWeather(lat, lon) {
    //     var weather = new Weather(lat, lon);
    //     weather.fetchHourlyWeather().then(() => {
    //         const weatherData = weather.hourlyWeather;
    //         this.hourlyWeather.update(weatherData);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    getCity(lat, lon) {

        var city = new City(lat, lon);
        city.fetchCity().then(() => {
            this.weatherContainer.updateCity(city.city);
        }).catch(error => {
            console.log(error);
        });
    }



}