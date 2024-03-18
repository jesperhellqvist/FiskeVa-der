

class WeatherContainer {
    constructor(weatherAppContainer) {
        this.weatherContainer = document.createElement('div');
        this.tempContainer = new TempContainer(this.weatherContainer);
        this.windContainer = new WindContainer(this.weatherContainer);
        this.userPosition = new UserPositionContainer(this.weatherContainer);
        this.weatherDescription = document.createElement('p');
        this.weatherImg = document.createElement('img');
        this.videoElement = document.createElement('video');
        this.videoElement.autoplay = true;
        this.videoElement.loop = true;
        this.videoElement.className = 'weather-img';

        this.addElements(weatherAppContainer);
    }

    addElements(weatherAppContainer) {
        this.weatherContainer.id = 'weather-container';
        weatherAppContainer.appendChild(this.weatherContainer);
        this.weatherDescription.className = 'weather-description';
        this.weatherContainer.appendChild(this.weatherDescription);
        this.weatherImg.className = 'weather-img';
        this.weatherContainer.appendChild(this.weatherImg);
        this.weatherContainer.appendChild(this.videoElement);
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


