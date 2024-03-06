
class WeatherApp {
    constructor() {
        this.currentWeatherContainer = document.getElementById('current-weather');
        this.hourlyWeatherContainer = document.getElementById('hourly-weather');
        this.loadingSreen = document.getElementById('loadingScreen');
        this.noLocationScreen = document.getElementById('noLocationScreen');
        this.errorScreen = document.getElementById('errorScreen');



        this.weatherContainer = new WeatherContainer(this.currentWeatherContainer);
        this.barometerContainer = new BarometerContainer(this.currentWeatherContainer);
        this.fishAnimationContainer = new FishAnimationContainer(this.currentWeatherContainer);
        this.hourlyWeather = new HourlyWeather(this.hourlyWeatherContainer);
        this.getUserPosition();
    }

    getUserPosition() {
        var userPosition = new UserPosition();
        userPosition.locationPromise.then(() => {
            this.noLocationScreen.style.display = 'none';
            this.getWeather(userPosition.latitude, userPosition.longitude);
            this.getCity(userPosition.latitude, userPosition.longitude);
        }).catch(error => {
            this.noLocationScreen.style.display = 'flex';
            console.log(error);
        });
    }

    getWeather(lat, lon) {
        console.log(lat, lon);
        var weather = new Weather(lat, lon);
        weather.fetchCurrentWeather().then(() => {
            this.loadingSreen.style.display = 'none';
            this.errorScreen.style.display = 'none';
            this.currentWeatherContainer.style.display = 'flex';



            const hourlyWeather = weather.currentWeather.hourly;
            const weatherData = weather.currentWeather;
            const correntTemp = weatherData.current.temperature_2m;
            const correntWind = weatherData.current.wind_speed_10m;
            const correntPressure = weatherData.current.pressure_msl;
            const correntWeather = weatherData.current.weather_code;
            const correntWindDirection = weatherData.current.wind_direction_10m;


            this.weatherContainer.update(correntTemp, correntWind, correntWindDirection);
            this.barometerContainer.update(correntPressure);
            this.fishAnimationContainer.setFishId(correntPressure);
            this.weatherContainer.setBackGround(correntWeather);
            this.hourlyWeather.createHourlyWeather(hourlyWeather);


        }).catch(error => {
            if (navigator.onLine) {
                this.errorScreen.style.display = 'flex';
                this.loadingSreen.style.display = 'none';
                console.log(error);
            }
            this.loadingSreen.style.display = 'none';
            this.currentWeatherContainer.style.display = 'flex';

            setTimeout(() => {
                alert('No internet connection');
            }, 5000);
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