
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
            localStorage.setItem('cachedUserPosition', JSON.stringify({ latitude: userPosition.latitude, longitude: userPosition.longitude })); // Sparar användarens position i localstorage
        }).catch(error => {
            this.noLocationScreen.style.display = 'flex';
           console.log(error); 
            // Check if we have cached data
            let cachedUserPosition = localStorage.getItem('cachedUserPosition'); // Hämtar användarens position från localstorage
            if (cachedUserPosition) {
                cachedUserPosition = JSON.parse(cachedUserPosition);
                this.getWeather(cachedUserPosition.latitude, cachedUserPosition.longitude);
                this.getCity(cachedUserPosition.latitude, cachedUserPosition.longitude);
            }
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
            console.log(weatherData);
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
            localStorage.setItem('cachedWeatherData', JSON.stringify(weather.currentWeather));

        }).catch(error => {
            this.loadingSreen.style.display = 'none';
            this.currentWeatherContainer.style.display = 'flex';
            console.log(error);
                // Check if we have cached data
                let cachedWeatherData = localStorage.getItem('cachedWeatherData');
                if (cachedWeatherData) {
                    console.log('cachedWeatherData');
                    cachedWeatherData = JSON.parse(cachedWeatherData);
                    const hourlyWeather = cachedWeatherData.hourly;
                    const weatherData = cachedWeatherData;
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
                }
            
        });

    }


    getCity(lat, lon) {

        var city = new City(lat, lon);
        city.fetchCity().then(() => {
            this.weatherContainer.updateCity(city.city);
            localStorage.setItem('cachedCityData', JSON.stringify(city.city));
        }).catch(error => {
            let cachedCityData = localStorage.getItem('cachedCityData');
            if (cachedCityData) {
                cachedCityData = JSON.parse(cachedCityData);
                this.weatherContainer.updateCity(cachedCityData);
            }
        });
    }



}