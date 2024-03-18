/**
 * Class representerar hourly weather.
 */

class HourlyWeather {
    /**
   * Skapar hourly weather.
   * @param {HTMLElement} weatherAppContainer - Behållaren för weather app.
   */
    constructor(weatherAppContainer) {
        this.hourlyWeather = document.createElement('div');
        this.weatherImg = document.createElement('img');
        this.headerDiv = document.createElement('div');
        this.hourlyWeatherContainer = document.createElement('div');
        this.videoElement = document.createElement('video');
        this.videoElement.autoplay = true;
        this.videoElement.loop = true;
        this.videoElement.className = 'weather-img';
        this.addElements(weatherAppContainer);
        this.createHourlyWeather();
    }

/**
   * Lägger till element till weather app container.
   * @param {HTMLElement} weatherAppContainer - Behållaren för weather app.
   * @returns {undefined} - Inget returvärde.
   */
    addElements(weatherAppContainer) {
        this.hourlyWeather.id = 'hourly-weather-container';
        weatherAppContainer.appendChild(this.hourlyWeather);
        this.weatherImg.className = 'weather-img';
        this.hourlyWeather.appendChild(this.weatherImg);
        this.hourlyWeather.appendChild(this.videoElement);
        this.headerDiv.className = 'header-div';
        this.hourlyWeather.appendChild(this.headerDiv);
        this.headerDiv.innerHTML = '<p class="time-header">Tid</p><p class="weather-header">Väder</p><p class="temp-header">C°</p><p class="hPa-header">hPa</p><p class="wind-header">m/s</p> <p class="wind-header">&#129517</p>';
        this.hourlyWeatherContainer.className = 'hour-weather-container';
        this.hourlyWeather.appendChild(this.hourlyWeatherContainer);
    }

/**
   * Upptaterar hourly weather med ny väderdata.
   * @param {Object} weatherData - Den nya väderdatan.
   * @returns {undefined} - Inget returvärde.
   */
    createHourlyWeather(weatherData) {
        if (weatherData === undefined) {
            return;
        }

        var temp = weatherData.temperature_2m;


        var hpa = weatherData.pressure_msl;


        var windSpeed = weatherData.wind_speed_10m;

        var windDirection = weatherData.wind_direction_10m;



        var weatherCode = weatherData.weather_code;
        var h = new Date().getHours();


        for (var i = 0; i < 24; i++) {

            h++;
            if (h > 23) {
                h = 0;
            }

            var hourWeather = document.createElement('div');
            hourWeather.className = 'hour-weather';
            this.hourlyWeatherContainer.appendChild(hourWeather);


            var timeElem = document.createElement('p');
            timeElem.className = 'time';

            timeElem.innerHTML = h + ':00';
            hourWeather.appendChild(timeElem);


            var weatherIcon = document.createElement('img');
            var code = weatherCode[h];
            weatherIcon.src = this.setWeatherIcon(code);
            weatherIcon.className = 'weather-icon';
            hourWeather.appendChild(weatherIcon);


            var tempElem = document.createElement('p');
            var temp = Math.floor(weatherData.temperature_2m[h]);
            tempElem.className = 'temp';
            tempElem.innerHTML = temp + '°';
            hourWeather.appendChild(tempElem);


            var hPa = document.createElement('p');
            hPa.className = 'hPa';
            if (hpa[h] >= hpa[h - 1]) {
                hPa.innerHTML = Math.floor(hpa[h]) + ' ↑';
            }
            else {
                hPa.innerHTML = Math.floor(hpa[h]) + ' ↓';
            }
            hourWeather.appendChild(hPa);


            var wind = document.createElement('p');
            wind.className = 'wind';
            wind.innerHTML = Math.floor(windSpeed[h]);
            hourWeather.appendChild(wind);

            var windImg = document.createElement('img');
            windImg.className = 'wind-img';
            windImg.src = '../src/js/img/windDir1.png';
            windImg.style.width = '10px';
            windImg.style.transform = 'rotate(' + windDirection[h] + 'deg)';
            hourWeather.appendChild(windImg);
        }

        this.setBackGround(weatherCode[0]);
    }

/**
   * Sätt väder ikon beroende på väderkoden.
   * @param {number} code - Väderkoden.
   * @returns {string} URL till väder ikonen.
   */
    setWeatherIcon(weatherCode) {

        switch (weatherCode) {
            case 0:
                return '../src/js/icons/sol.png';
            case 1:
                return '../src/js/icons/nastanKlart.png';
            case 2:
                return '../src/js/icons/halvklart.png';
            case 3:
                return '../src/js/icons/molnigt.png';
            case 45:
            case 48:
                return '../src/js/icons/dimma.png';
            case 51:
            case 53:
            case 55:
            case 61:
            case 80:
                return '../src/js/icons/lattregn.png';
            case 63:
            case 80:
            case 81:
                return '../src/js/icons/mellanregn.png';
            case 65:
            case 82:
                return '../src/js/icons/mycketregn.png';
            case 57:
            case 66:
            case 67:
                return '../src/js/icons/regnosno.png';
            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                return '../src/js/icons/sno.png';
            case 95:
            case 96:
            case 99:
                return '../src/js/icons/oska.png';
            default:
                return '../src/js/icons/sol.png';
        }
    }

/**
 * Sätt bakgrund beroende på väderkoden.
 * @param {number} weatherCode - Väderkoden.
 * @returns {undefined} - Inget returvärde.
 * */
    setBackGround(weatherCode) {


        switch (weatherCode) {

            case 0:
                this.weatherImg.src = './src/js/weather/clearSky.png';
                break;

            case 1:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                break;
            case 2:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                break;
            case 3:
                this.weatherImg.src = './src/js/weather/overcast.png';
                break;

            case 53:
                this.weatherImg.src = '';
                this.videoElement.src = './src/js/weather/lightrain.mp4';
            case 63:
            case 81:
                this.weatherImg.src = '';
                this.videoElement.src = './src/js/weather/lightrain.mp4';

                break;
            case 55:
            case 65:
            case 82:
                this.weatherImg.src = '';
                this.videoElement.src = './src/js/weather/heavyrain.mp4';
                break;

            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                this.weatherImg.src = '';
                this.videoElement.src = './src/js/weather/snow.mp4';
                break;
            default:
                this.weatherImg.src = './src/js/weather/clearSky.png';
                break;
        }
    }
}