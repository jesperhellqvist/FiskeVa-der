

class UserPositionContainer {
    constructor(weatherContainer) {
        this.userPositionDiv = document.createElement('div');
        this.userPositionDiv.id = 'user-position';
        weatherContainer.appendChild(this.userPositionDiv);
        this.pElement = document.createElement('p');
        this.userPositionDiv.appendChild(this.pElement);
        this.pElement.id = 'user-city';


    }

    update(place) {

       
        var city = place.address.city;
        var country = place.address.country;
        var municipality = place.address.municipality;
        var hamlet = place.address.hamlet;
 console.log(city, country, municipality, hamlet);    

        if (city) {
            this.pElement.innerHTML = city;
            return;
        }
        else if (hamlet) {
            this.pElement.style.fontSize = '1.5em';
            this.pElement.innerHTML = hamlet;
            return;
        }
        else if (municipality) {
            this.pElement.innerHTML = municipality;
            return;
        }
        else if (country) {
            this.pElement.innerHTML = country;
            return;
        }

    }




}