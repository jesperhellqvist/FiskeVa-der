

class TempContainer {
  constructor(weatherContainer) {
    this.tempContainerDiv = document.createElement('div');
    weatherContainer.appendChild(this.tempContainerDiv);
    this.tempContainerDiv.id = 'temp-container';
    this.pElement = document.createElement('p');
    this.tempContainerDiv.appendChild(this.pElement);
    this.pElement.id = 'temp';
  }

  update(temp) {
    this.pElement.innerHTML = temp + '°C';
  }
 
}