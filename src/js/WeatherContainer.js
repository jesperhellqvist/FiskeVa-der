

class WeatherContainer {
    constructor() {
        this.weatherAppContainer = document.getElementById('weather-app');
        this.weatherContainer = document.createElement('div');
        this.weatherAppContainer.appendChild(this.weatherContainer);
        this.weatherContainer.id = 'weather-container';
        this.tempContainer = new TempContainer(this.weatherContainer);
        this.windContainer = new WindContainer(this.weatherContainer);
        this.userPosition = new UserPositionContainer(this.weatherContainer);
       
    }

    update(temp, wind, windDirection) {
        console.log( temp, wind, windDirection);
        this.tempContainer.update(temp);
     this.windContainer.update(wind, windDirection);
     
    }

    updateCity(city) {
        console.log(city);
        this.userPosition.update(city);
    }

  
}