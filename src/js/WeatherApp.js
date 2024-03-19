/**
 * Class rrepresenterar weather app.
 */
class WeatherApp {
    /**
  * Skapar en weather app.
  */
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
        this.activeContainer = this.currentWeatherContainer;    
        this.getUserPosition();
    }
    /**
       * Hämtar användarens position.
       * @returns {undefined} - Inget returvärde.
       */
    getUserPosition() {
        var userPosition = new UserPosition();
        userPosition.locationPromise.then(() => {
            this.noLocationScreen.style.display = 'none';
            this.getWeather(userPosition.latitude, userPosition.longitude);
            this.getCity(userPosition.latitude, userPosition.longitude);
        }).catch(error => {
            this.noLocationScreen.style.display = 'flex';
            this.loadingSreen.style.display = 'none';
        });
    }
    /**
      * Hämtar vädret för en specifik latitud och longitud.
      * @param {number} lat - Latituden.
      * @param {number} lon - Longituden.
      * @returns {undefined} - Inget returvärde.
      */
    getWeather(lat, lon) {
        var weather = new Weather(lat, lon);
        weather.fetchCurrentWeather().then(() => {
            this.loadingSreen.style.display = 'none';
            this.errorScreen.style.display = 'none';
            this.activeContainer.style.display = 'flex';
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
            this.loadingSreen.style.display = 'none';
            this.errorScreen.style.display = 'flex';
        });

    }
    /**
     * Hämtar staden för en specifik latitud och longitud.
     * @param {number} lat - Latituden.
     * @param {number} lon - Longituden.
     * @returns {undefined} - Inget returvärde.
        */


    getCity(lat, lon) {

        var city = new City(lat, lon);
        city.fetchCity().then(() => {
            this.weatherContainer.updateCity(city.city);

        }).catch(error => {
            this.weatherContainer.updateCity('Hittar ingen plats');
        });
    }


    /**
     * Uppdaterar vädret och se till att rätt behållare visas beroende på var uppdaterningen sker.
     * @returns {undefined} - Inget returvärde.
     */
    refresh() {
    this.activeContainer = this.currentWeatherContainer.style.display === 'flex' ? this.currentWeatherContainer : this.hourlyWeatherContainer;
    this.loadingSreen.style.display = 'flex';
    this.currentWeatherContainer.style.display = 'none';
    this.hourlyWeatherContainer.style.display = 'none';
    this.getUserPosition();
    }
}

