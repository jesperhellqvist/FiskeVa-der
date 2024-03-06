

class HourlyWeather {
    constructor(weatherAppContainer) {
        this.hourlyWeather = document.createElement('div');
        this.weatherImg = document.createElement('img');
        this.headerDiv = document.createElement('div');
        this.hourlyWeatherContainer = document.createElement('div');

        this.addElements(weatherAppContainer);
        this.createHourlyWeather();
    }


    addElements(weatherAppContainer) {
        this.hourlyWeather.id = 'hourly-weather-container';
        weatherAppContainer.appendChild(this.hourlyWeather);
        this.weatherImg.className = 'weather-img';
        this.hourlyWeather.appendChild(this.weatherImg);
        this.headerDiv.className = 'header-div';
        this.hourlyWeather.appendChild(this.headerDiv);
        this.headerDiv.innerHTML = '<p class="time-header">Time</p><p class="weather-header">Weather</p><p class="temp-header">C°</p><p class="hPa-header">hPa</p><p class="wind-header">m/s</p> <p class="wind-header">&#129517</p>';
        this.hourlyWeatherContainer.className = 'hour-weather-container';
        this.hourlyWeather.appendChild(this.hourlyWeatherContainer);
    }


    createHourlyWeather(weatherData) {
        if (weatherData === undefined) {
            return;
        }
        console.log(weatherData);


        var temp = weatherData.temperature_2m;


        var hpa = weatherData.pressure_msl;


        var windSpeed = weatherData.wind_speed_10m;

        var windDirection = weatherData.wind_direction_10m;
        console.log(windDirection);


        var weatherCode = weatherData.weather_code;



        for (var i = 0; i < 24; i++) {
            var hourWeather = document.createElement('div');
            hourWeather.className = 'hour-weather';
            this.hourlyWeatherContainer.appendChild(hourWeather);


            var timeElem = document.createElement('p'); 
            timeElem.className = 'time';
            var h = new Date().getHours();
            timeElem.innerHTML = (h + i) % 24 + ':00';
            hourWeather.appendChild(timeElem);


            var weatherIcon = document.createElement('img');
            var code = weatherCode[i];
            weatherIcon.src = this.setWeatherIcon(code);
            weatherIcon.className = 'weather-icon';
            hourWeather.appendChild(weatherIcon);


            var tempElem = document.createElement('p');
            var temp = weatherData.temperature_2m[i];
            tempElem.className = 'temp';
            tempElem.innerHTML = temp + '°';
            hourWeather.appendChild(tempElem);


            var hPa = document.createElement('p');
            hPa.className = 'hPa';
            if (hpa[i] >= hpa[i - 1]) {
                hPa.innerHTML = hpa[i] + ' ↑';
            }
            else {
                hPa.innerHTML = hpa[i] + ' ↓';
            }
            hourWeather.appendChild(hPa);


            var wind = document.createElement('p');
            wind.className = 'wind';
            wind.innerHTML = windSpeed[i];
            hourWeather.appendChild(wind);

            var windImg = document.createElement('img');
            windImg.className = 'wind-img';
            windImg.src = '../src/js/img/windDir1.png';
            windImg.style.width = '10px';
            windImg.style.transform = 'rotate(' + windDirection[i] + 'deg)';
            hourWeather.appendChild(windImg);
        }

        this.setBackGround(weatherCode[0]);
    }


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


    setBackGround(weatherCode) {
        console.log(weatherCode);
        switch (weatherCode) {
            case 0:
                this.weatherImg.src = '../src/js/weather/clearSky.png';
                break;
            case 1:
                this.weatherImg.src = '../src/js/weather/mainlyClear.png';
                break;
            case 2:
                this.weatherImg.src = '../src/js/weather/mainlyClear.png';
                break;
            case 3:
                this.weatherImg.src = '../src/js/weather/overcast.png';
                break;
            case 53:
            case 63:
            case 81:
                this.weatherImg.src = '../src/js/weather/lightrain.gif';
                break;
            case 55:
            case 65:
            case 82:
                this.weatherImg.src = '../src/js/weather/heavyrain.gif';
                break;
            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                this.weatherImg.src = '../src/js/weather/snow.gif';
                break;

            default:
                this.weatherImg.src = '../src/js/weather/mainlyClear.png';
        }
    }

}