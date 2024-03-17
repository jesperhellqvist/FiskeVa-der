

class Weather {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
    this.url_currentWeather = "https://api.open-meteo.com/v1/forecast?latitude=" + this.lat + "&longitude=" + this.lon + "&current=temperature_2m,is_day,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,pressure_msl,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code&wind_speed_unit=ms&timezone=Europe%2FBerlin&forecast_days=1";


    this.currentWeather = {};
  }
  fetchCurrentWeather() {
    return new Promise((resolve, reject) => {
      if (navigator.onLine) {
        // User is online - fetch from the network
        fetch(this.url_currentWeather)
          .then(response => response.json())
          .then(data => {
            this.currentWeather = data;
            // Save the data to localStorage
            localStorage.setItem('currentWeather', JSON.stringify(data));
            resolve();
          })
          .catch(error => {
            reject('An error occurred while fetching the weather data: ', error);
          });
      } else {
        // User is offline - get the data from localStorage
        const data = JSON.parse(localStorage.getItem('currentWeather'));
        if (data) {
          console.log('Using cached data');
          this.currentWeather = data;
          resolve();
        } else {
          reject('No data available');
        }
      }
    });
  }
}