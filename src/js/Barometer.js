
/**
 * Class representerar en barometer.
 */
class Barometer {
    /**
   * Skapar en barometer.
   * @param {HTMLElement} barometerContainer - Behållare för barometern.
   */
    constructor(barometerContainer) {
        this.barometer = document.createElement('div');
        this.pElement = document.createElement('p');
        this.img = document.createElement('img');
        this.airPreElement = document.createElement('p');
        this.addElements(barometerContainer);

    }

    /**
   * Lägger till element till barometer behållaren.
   * @param {HTMLElement} barometerContainer - Behållare för barometer.
   * @returns {undefined} - Inget returvärde.
   */
    addElements(barometerContainer) {
        this.barometer.id = 'barometer';
        barometerContainer.appendChild(this.barometer);
        this.barometer.appendChild(this.pElement);
        this.img.src = './src/js/img/barpointer.png';
        this.img.id = 'barpointer';
        this.airPreElement.id = 'airPre';
        this.barometer.appendChild(this.airPreElement);
        barometerContainer.appendChild(this.img);
    }

    /**
  * Uppdaterar barometern med ett nytt tryckvärde.
  * @param {number} hPa - Det nya tryckvärdet hPa.
  * @returns {undefined} - Inget returvärde.
  */

    update(hPa) {

        hPa = Math.floor(hPa);
        console.log(hPa);
        this.pElement.innerHTML = "Barometer <br>" + hPa + ' hPa';
        if (hPa < 1013) {
            this.airPreElement.innerHTML = "Lågtryck fisken är inaktiv";
        }
        else {
            this.airPreElement.innerHTML = "Högtryck fisken är aktiv";
        }
        var deg = ((hPa - 961) / (1060 - 961)) * 180 - 90;

        this.img.style.transform = 'translateX(-50%) rotate(' + deg + 'deg)';
    }


}