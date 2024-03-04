

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

       console.log(place);
        var city = place.address.city;
        var country = place.address.country;
        var municipality = place.address.municipality;
        var hamlet = place.address.hamlet;
        var village = place.address.village;
 console.log(city, country, municipality, hamlet);    

        if (city) {
            this.pElement.innerHTML = city;
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
            this.pElement.innerHTML = municipality;
            return;
        }
        else if (country) {
            this.pElement.innerHTML = country;
            return;
        }

    }




}