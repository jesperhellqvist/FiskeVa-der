
class WindContainer {
    constructor(weatherContainer) {
        this.windContainerDiv = document.createElement('div');
        this.pElement = document.createElement('p');
        this.windImg = document.createElement('img');
        
        this.addElements(weatherContainer);
        
    }

    addElements(weatherContainer) {
        this.windContainerDiv.id = 'wind-container';
        weatherContainer.appendChild(this.windContainerDiv);
        this.pElement.id = 'wind';
        this.windContainerDiv.appendChild(this.pElement);
        this.windImg.id = 'wind-img';
        this.windImg.src = '../src/js/img/windDir1.png';
        this.windContainerDiv.appendChild(this.windImg);
    }
    
    update(wind, windDirection) {
        this.pElement.innerHTML = wind + 'm/s ';
        this.windImg.style.display = 'block';
        this.windImg.style.transform = 'rotate(' + windDirection + 'deg)';

        
    }
}