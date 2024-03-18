/**
 * Class representerar en fish animation container.
 */

class FishAnimationContainer {
  /**
   * Skapar en fish animation container.
   * @param {HTMLElement} weatherAppContainer - Behållaren för weather app.
   */
  constructor(weatherAppContainer) {
    this.fishAnimationContainer = document.createElement('div');
    this.fishImg = document.createElement('img');
    this.background = document.createElement('img');
    this.addElements(weatherAppContainer);
  }
 /**
   * ALägger till element till weather app container.
   * @param {HTMLElement} weatherAppContainer - Behållaren för weather app.
   * @returns {undefined} - Inget returvärde.
   */
  addElements(weatherAppContainer) {
    this.fishAnimationContainer.id = 'fish-animation-container';
    weatherAppContainer.appendChild(this.fishAnimationContainer);
    this.fishImg.src = '../src/js/img/abborre.png';
    this.fishImg.id = 'fish';
    this.fishAnimationContainer.appendChild(this.fishImg);
    this.background.src = './src/js/img/sjo3.png';
    this.background.id = 'fish-animation-container-background';
    this.fishAnimationContainer.appendChild(this.background);
  }

  /**
   * Sätter fiskens id beroende på tryckvärdet.
   * @param {number} hPa - Tryckvärdet i hPa.
   * @returns {undefined} - Inget returvärde.
   */
  setFishId(hPa) {

    if (hPa < 1013) {
      this.fishImg.id = 'fish';
    }
    else {
      this.fishImg.id = 'fishActive';
    }

  }
}