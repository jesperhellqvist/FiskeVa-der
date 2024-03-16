

class TempContainer {
  constructor(weatherContainer) {
    this.tempContainerDiv = document.createElement('div');
    this.pElement = document.createElement('p');

    this.addElements(weatherContainer);
  
  }

  addElements(weatherContainer) {
    this.tempContainerDiv.id = 'temp-container';
    weatherContainer.appendChild(this.tempContainerDiv);
    this.pElement.id = 'temp';
    this.tempContainerDiv.appendChild(this.pElement);
  }

  update(temp) {
    this.pElement.innerHTML = temp + '°';
  }
 
}