

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
        
     console.log(city);
    

        if (city.address.city === undefined) {
            this.pElement.style.fontSize = '1.5em';
            this.pElement.innerHTML = city.address.municipality;
        }
        if (city.address.municipality === undefined) {
            this.pElement.style.fontSize = '1.5em';
            this.pElement.innerHTML = city.address.country;
        }
        else {
            this.pElement.innerHTML = city.address.city;
        }
       
    }



 
}