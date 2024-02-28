

class HourlyWeather{
    constructor(weatherAppContainer) {
        this.hourlyWeather = document.createElement('div');
        weatherAppContainer.appendChild(this.hourlyWeather);
        this.hourlyWeather.id = 'hourly-weather-container';
        this.weatherImg = document.createElement('img');
        this.weatherImg.className = 'weather-img';
        this.hourlyWeather.appendChild(this.weatherImg);

        this.createHourlyWeather();
    }


    pastHours() {

        var date = new Date();
        var hours = date.getHours();
        return hours;

    }

    createHourlyWeather(weatherData) {
        if (weatherData === undefined) {
            return;
        }
        console.log(weatherData);
        var remainingHours = this.pastHours();

        var temp = weatherData.temperature_2m;
        temp = temp.slice(remainingHours);

        var timeArray = [];
        var h = new Date().getHours();
        for (var i = 0; i < (24 - remainingHours); i++) {
            timeArray.push((h + i) % 24 + ':00');
        }

        var hpa = weatherData.pressure_msl;
        hpa = hpa.slice(remainingHours);

        var windSpeed = weatherData.wind_speed_10m;
        windSpeed = windSpeed.slice(remainingHours);

        var weatherCode = weatherData.weather_code;
        weatherCode = weatherCode.slice(remainingHours);


        for (var i = 0; i < (24 - remainingHours); i++) {
            var hourWeather = document.createElement('div');
            hourWeather.className = 'hour-weather';
            this.hourlyWeather.appendChild(hourWeather);

            var timeElem = document.createElement('p');
            timeElem.className = 'time';
            timeElem.innerHTML = timeArray[i];
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
            hPa.innerHTML = hpa[i] + ' hPa';
            hourWeather.appendChild(hPa);

            var wind = document.createElement('p');
            wind.className = 'wind';
            wind.innerHTML = windSpeed[i] + ' m/s';
            hourWeather.appendChild(wind);
        }

        this.setBackGround(weatherCode[0]);

    }


    setWeatherIcon(weatherCode) {


        switch (weatherCode) {
            case 0:
                return '../src/js/icons/clearsky.png';
            case 1:
                return '../src/js/icons/moastlyclear.png';
            case 2:
                return '../src/js/icons/partlyclouded.png';
            case 3:
                return '../src/js/icons/cloudy.png';
            case 53:
            case 63:
            case 81:
            case 55:
            case 65:
            case 82:
                return '../src/js/icons/rain.png';
            case 66:
            case 67:
                return '../src/js/icons/rainandsnow.png';
            case 95:
            case 96:
            case 99:
                return '../src/js/icons/thunderstorm.png';
            default:
                return '../src/js/icons/clearsky.png';
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
            default:
                this.weatherImg.src = '../src/js/weather/mainlyClear.png';
        }
    }

}