/**
 * Class representerar Vädret.
 */
class Weather {
   /**
   * Skapar ett weather object.
   * @param {number} lat - Latitude koordinaten.
   * @param {number} lon - Longitude koordinaten.
   */
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
    this.url_currentWeather = "https://api.open-meteo.com/v1/forecast?latitude=" + this.lat + "&longitude=" + this.lon + "&current=temperature_2m,is_day,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,pressure_msl,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code&wind_speed_unit=ms&timezone=Europe%2FBerlin&forecast_days=1";


    this.currentWeather = {};
  }
  /**
   * Hämtar väderdata från nätverket eller från localStorage om användaren är offline.
   * @returns {Promise} - Ett löfte som lyckas eller misslyckas beroende på om data kunde hämtas.
   */
  fetchCurrentWeather() {
    return new Promise((resolve, reject) => {
      if (navigator.onLine) {
        // Användare är online - hämta från nätverket
        fetch(this.url_currentWeather)
          .then(response => response.json())
          .then(data => {
            this.currentWeather = data;
            // Spara data till localStorage
            localStorage.setItem('currentWeather', JSON.stringify(data));
            resolve();
          })
          .catch(error => {
            reject('Det gick inte att hämta väderdata: ', error);
          });
      } else {
        // Användare är offline - hämta data från localStorage
        const data = JSON.parse(localStorage.getItem('currentWeather'));
        if (data) {
          console.log('Using cached data');
          alert('Du är offline, Fiske-Väder använder sparad data');
          this.currentWeather = data;
          resolve();
        } else {
          reject('No data available');
        }
      }
    });
  }
}