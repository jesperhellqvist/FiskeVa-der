

class UserPositionContainer {
    constructor(weatherContainer) {
        this.userPositionDiv = document.createElement('div');
        this.pElement = document.createElement('p');
    
        this.addElements(weatherContainer);
    }

    addElements(weatherContainer) {
    this.userPositionDiv.id = 'user-position';
        weatherContainer.appendChild(this.userPositionDiv);
        this.pElement.id = 'user-city';
        this.userPositionDiv.appendChild(this.pElement);
    }

    update(place) {
        if (place === 'Hittar ingen plats') { // Något gick fel när platsen hämtas
            this.pElement.innerHTML = 'Hittar ingen plats';
            this.pElement.style.fontSize = '1.5em';
            return;
        }

        var city = place.address.city;
        var country = place.address.country;
        var municipality = place.address.municipality;
        var hamlet = place.address.hamlet;
        var village = place.address.village;
        var town = place.address.town;

        if (city) {
            this.pElement.innerHTML = city;
            return;
        }
        else if (town) {
            this.pElement.innerHTML = town;
            return;
        }
        else if (village) {
            this.pElement.innerHTML = village;
            return;
        }
        else if (hamlet) {
            this.pElement.innerHTML = hamlet;
            return;
        }
        else if (municipality) {
            this.pElement.style.fontSize = '1.5em';
            this.pElement.innerHTML = municipality;
            return;
        }
        else if (country) {
            this.pElement.innerHTML = country;
            return;
        }
        else {
            this.pElement.innerHTML = 'Rymden';
        }

    }




}