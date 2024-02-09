
class WindContainer {
    constructor(weatherContainer) {
        this.windContainerDiv = document.createElement('div');
        weatherContainer.appendChild(this.windContainerDiv);
        this.windContainerDiv.id = 'wind-container';
        this.pElement = document.createElement('p');
        this.windContainerDiv.appendChild(this.pElement);
        this.pElement.id = 'wind';
        this.windImg = document.createElement('img');
        this.windContainerDiv.appendChild(this.windImg);
        this.windImg.id = 'wind-img';
        this.windImg.src = '../src/js/img/windDir1.png';
        
    }
    
    update(wind, windDirection) {
        this.pElement.innerHTML = wind + 'm/s ';
        this.windImg.style.display = 'block';
        this.windImg.style.transform = 'rotate(' + windDirection + 'deg)';

        
    }
}