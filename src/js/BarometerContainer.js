/**
 * Class representerar en barometer behållare.
 */

class BarometerContainer {
    /**
  * Skapar en barometer behållare.
  * @param {HTMLElement} weatherAppContainer - Behållare för weather app.
  */
    constructor(weatherAppContainer) {
        this.barometerContainer = document.createElement('div');
        this.barometer = new Barometer(this.barometerContainer);
        this.background = document.createElement('img');
        this.addElements(weatherAppContainer);
    }
    /**
      * Lägger till element till weather app behållaren.
      * @param {HTMLElement} weatherAppContainer - Behållare för weather app.
      * @returns {undefined} - Inget returvärde.
      */
    addElements(weatherAppContainer) {
        this.barometerContainer.id = 'barometer-container';
        weatherAppContainer.appendChild(this.barometerContainer);
        this.background.src = './src/js/img/barometer2.png';
        this.background.id = 'barometer-container-background';
        this.barometerContainer.appendChild(this.background);
    }
    /**
       * Skickar vidare uppdatering till barometern.
       * @param {number} hPa - Det nya värdet i hPa.
       * @returns {undefined} - Inget returvärde.
       */
    update(hPa) {
        this.barometer.update(hPa);
    }
}