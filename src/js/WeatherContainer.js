

class WeatherContainer {
    constructor(weatherAppContainer) {
        this.weatherContainer = document.createElement('div');
        this.tempContainer = new TempContainer(this.weatherContainer);
        this.windContainer = new WindContainer(this.weatherContainer);
        this.userPosition = new UserPositionContainer(this.weatherContainer);
        this.weatherDescription = document.createElement('p');
        this.weatherImg = document.createElement('img');

        this.addElements(weatherAppContainer);
    }

    addElements(weatherAppContainer) {
        this.weatherContainer.id = 'weather-container';
        weatherAppContainer.appendChild(this.weatherContainer);
        this.weatherDescription.className = 'weather-description';
        this.weatherContainer.appendChild(this.weatherDescription);
        this.weatherImg.className = 'weather-img';
        this.weatherContainer.appendChild(this.weatherImg);
    }

    update(temp, wind, windDirection) {
        this.tempContainer.update(temp);
        this.windContainer.update(wind, windDirection);

    }

    updateCity(city) {
        this.userPosition.update(city);
    }

    setBackGround(weatherCode) {


        switch (weatherCode) {

            case 0:
                this.weatherImg.src = './src/js/weather/clearSky.png';
                this.weatherDescription.textContent = 'Clear Sky';
                break;

            case 1:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                this.weatherDescription.textContent = 'Few Clouds';
                break;
            case 2:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                this.weatherDescription.textContent = 'Scattered Clouds';
                break;
            case 3:
                this.weatherImg.src = './src/js/weather/overcast.png';
                this.weatherDescription.textContent = 'Broken Clouds';
                break;

            case 53:
                this.weatherImg.src = './src/js/weather/lightrain.gif';
                this.weatherDescription.textContent = 'Light Rain';
            case 63:
            case 81:
                this.weatherImg.src = './src/js/weather/lightrain.gif';

                break;
            case 55:
            case 65:
            case 82:
                this.weatherImg.src = './src/js/weather/heavyrain.gif';
                this.weatherDescription.textContent = 'Heavy Rain';
                break;

            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                this.weatherImg.src = './src/js/weather/snow.gif';
                this.weatherDescription.textContent = 'Snow';
                break;
            default:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                this.weatherDescription.textContent = 'Clear Sky';
                break;
        }

        return this.weatherImg.src;
    }




}


