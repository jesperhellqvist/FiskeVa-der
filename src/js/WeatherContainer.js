/**
 * Class representerar en weather container.
 */

class WeatherContainer {
    /**
  * Skapar en weather container.
  * @param {HTMLElement} weatherAppContainer - Behållaren för weather app.
  */
    constructor(weatherAppContainer) {
        this.weatherContainer = document.createElement('div');
        this.tempContainer = new TempContainer(this.weatherContainer);
        this.windContainer = new WindContainer(this.weatherContainer);
        this.userPosition = new UserPositionContainer(this.weatherContainer);
        this.weatherDescription = document.createElement('p');
        this.weatherImg = document.createElement('img');
        this.videoElement = document.createElement('video');


        this.addElements(weatherAppContainer);
    }
    /**
     * Lägger till element till weather container.
     * @param {HTMLElement} weatherAppContainer - Behållaren för weather app.
     * @returns {undefined} - Inget returvärde.
     *  */

    addElements(weatherAppContainer) {
        this.weatherContainer.id = 'weather-container';
        weatherAppContainer.appendChild(this.weatherContainer);
        this.weatherDescription.className = 'weather-description';
        this.weatherContainer.appendChild(this.weatherDescription);
        this.weatherImg.className = 'weather-img';
        this.weatherContainer.appendChild(this.weatherImg);
        this.weatherContainer.appendChild(this.videoElement);
        this.videoElement.autoplay = true;
        this.videoElement.loop = true;
        this.videoElement.muted = true;
        this.videoElement.className = 'video-element';
    }
    /**
      * Skippar vidare uppdatering till temp och wind container.
      * @param {number} temp - Ny temperatur.
      * @param {number} wind -  Ny vindhastighet.
      * @param {number} windDirection - Ny vindriktning.
      * @returns {undefined} - Inget returvärde.
      */
    update(temp, wind, windDirection) {
        this.tempContainer.update(temp);
        this.windContainer.update(wind, windDirection);
    }
    /**
    * Skickar vidare uppdatering till user position container.
    * @param {string} city - Ny stad.
    * @returns {undefined} - Inget returvärde.
    */
    updateCity(city) {
        this.userPosition.update(city);
    }
    /**
      * Sätter bakgrundsbild och beskrivning beroende på väderkod.
      * @param {number} weatherCode - Väderkod.
      * @returns {undefined} - Inget returvärde.
      */
    setBackGround(weatherCode) {

        console.log(weatherCode);
        switch (weatherCode) {

            case 0:
                this.weatherImg.src = './src/js/weather/clearSky.png';
                this.weatherDescription.innerHTML = 'Klart';
                break;

            case 1:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                this.weatherDescription.innerHTML = 'Halvklart';
                break;
            case 2:
                this.weatherImg.src = './src/js/weather/mainlyClear.png';
                this.weatherDescription.innerHTML = 'Halvklart';
                break;
            case 3:
                this.weatherImg.src = './src/js/weather/overcast.png';
                this.weatherDescription.innerHTML = 'Målnigt';
                break;

            case 53:
            case 51:

                this.videoElement.src = './src/js/weather/lightrain.mp4';
                this.weatherDescription.innerHTML = 'Lätt regn';
            case 63:
            case 81:

                this.videoElement.src = './src/js/weather/lightrain.mp4';
                this.weatherDescription.innerHTML = 'Lätt regn';
                break;
            case 55:
            case 65:
            case 82:

                this.videoElement.src = './src/js/weather/heavyrain.mp4';
                this.weatherDescription.innerHTML = 'Kraftigt regn';
                break;

            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:

                this.videoElement.src = './src/js/weather/snow.mp4';
                this.weatherDescription.innerHTML = 'Snö';
                break;
            default:
                this.weatherImg.src = './src/js/weather/clearSky.png';
                this.weatherDescription.innerHTML = 'Klart';
                break;
        }
    }
}