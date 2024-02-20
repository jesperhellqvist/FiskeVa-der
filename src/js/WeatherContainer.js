

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
        console.log( temp, wind, windDirection);
        this.tempContainer.update(temp);
     this.windContainer.update(wind, windDirection);
     
    }

    updateCity(city) {
        console.log(city);
        this.userPosition.update(city);
    }

    setBackGround(weatherCode){
        console.log(weatherCode);
        weatherCode = 2;
       switch(weatherCode){
        
           case 0:
               this.weatherContainer.style.background = "url('./src/js/weather/clearSky_0.png')";
               break;
           case 1:
               this.weatherImg.src = './src/js/weather/cloud.png';
               break;
           case 2:
            this.weatherImg.src =  './src/js/weather/rain.png';
            this.weatherAppContainer.style.backgroundColor = "#e0dfdf";
               break;
        //    case 3:
        //        this.weatherContainer.style.backgroundImage = "url('./src/js/img/brokenclouds.jpg')";
        //        break;
        //    case 4:
        //        this.weatherContainer.style.backgroundImage = "url('./src/js/img/shower.jpg')";
        //        break;
        //    case 5:
        //        this.weatherContainer.style.backgroundImage = "url('./src/js/img/rain.jpg')";
        //        break;
        //    case 6:
        //        this.weatherContainer.style.backgroundImage = "url('./src/js/img/thunderstorm.jpg')";
        //        break;
        //    case 7:
        //        this.weatherContainer.style.backgroundImage = "url('./src/js/img/snow.jpg')";
        //        break;
        //    case 8:
        //        this.weatherContainer.style.backgroundImage = "url('./src/js/img/mist.jpg')";
        //        break;
           default:
               this.weatherContainer.style.backgroundImage = "url('./src/js/weather/clearSky_0.png')";
       }
    }

  
}