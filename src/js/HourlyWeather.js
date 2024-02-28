

class HourlyWeather {
    constructor(weatherAppContainer) {
        this.hourlyWeather = document.createElement('div');
        weatherAppContainer.appendChild(this.hourlyWeather);
        this.hourlyWeather.id = 'hourly-weather-container';
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
    }


    setWeatherIcon(weatherCode) {


        switch (weatherCode) {
            case 0:
                return '../src/js/icons/clearsky.png';
            case 1:
                return '../src/js/icons/cloudy.png';
            case 2:
                return '../src/js/icons/moastlyclear.png';
            case 3:
                return '../src/js/icons/partlyclouded.png';
            case 4:
                return '../src/js/icons/rain.png';
            case 5:
                return '../src/js/icons/rainandsnow.png';
            case 6:
                return '../src/js/icons/thunderstorm.png';
            default:
                return '../src/js/icons/clearsky.png';
        }

    }

}