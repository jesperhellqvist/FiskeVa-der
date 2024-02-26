

class WeatherContainer {
    constructor() {
        this.weatherAppContainer = document.getElementById('weather-app');
        this.weatherContainer = document.createElement('div');
        this.weatherAppContainer.appendChild(this.weatherContainer);
        this.weatherContainer.id = 'weather-container';
        this.tempContainer = new TempContainer(this.weatherContainer);
        this.windContainer = new WindContainer(this.weatherContainer);
        this.userPosition = new UserPositionContainer(this.weatherContainer);
        this.weatherImg = document.createElement('img');
        this.weatherImg.className = 'weather-img';
        this.weatherContainer.appendChild(this.weatherImg);

    }

    update(temp, wind, windDirection) {
        console.log(temp, wind, windDirection);
        this.tempContainer.update(temp);
        this.windContainer.update(wind, windDirection);

    }

    updateCity(city) {
        console.log(city);
        this.userPosition.update(city);
    }

    setBackGround(weatherCode) {
        console.log(weatherCode);
       
       
        switch (weatherCode) {

            case 0:
                this.weatherImg.src = './src/js/weather/clearSky.png';
                break;

            case 1:
            case 2:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                break;
            case 3:
                this.weatherImg.src = './src/js/weather/overcast.png';
                break;

            case 53:
            case 63:
            case 81:
                this.weatherImg.src = './src/js/weather/lightrain.gif';

                break;
            case 55:
            case 65:
            case 82:
                this.weatherImg.src = './src/js/weather/heavyrain.gif';
                break;
            default:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                break;
        }
    }


}