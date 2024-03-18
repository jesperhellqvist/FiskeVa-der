/**
 * Class representerar en temperature behållare.
 */

class TempContainer {
  /**
   * Skapar temperature container.
   * @param {HTMLElement} weatherContainer - Behållaren för weather app.
   */
  constructor(weatherContainer) {
    this.tempContainerDiv = document.createElement('div');
    this.pElement = document.createElement('p');

    this.addElements(weatherContainer);

  }
  /**
   * Lägger till element till weather container.
   * @param {HTMLElement} weatherContainer - Behållaren för weather app.
   * @returns {undefined}
   */
  addElements(weatherContainer) {
    this.tempContainerDiv.id = 'temp-container';
    weatherContainer.appendChild(this.tempContainerDiv);
    this.pElement.id = 'temp';
    this.tempContainerDiv.appendChild(this.pElement);
  }
  /**
     * Uppdaterar temperaturen med ett nytt värde.
     * @param {number} temp - Det nya värdet i grader celsius.
     * @returns {undefined} - Inget returvärde.
     */
  update(temp) {
    this.pElement.innerHTML = temp + '°';
  }
}