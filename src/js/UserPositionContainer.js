

class UserPositionContainer {
    constructor(weatherContainer) {
        this.userPositionDiv = document.createElement('div');
        this.userPositionDiv.id = 'user-position';
        weatherContainer.appendChild(this.userPositionDiv);
        this.pElement = document.createElement('p');
        this.userPositionDiv.appendChild(this.pElement);
        this.pElement.id = 'user-city';
       
      
    }

    update(city) {
        this.pElement.innerHTML = city.address.city;
    }



 
}