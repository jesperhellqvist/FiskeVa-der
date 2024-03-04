

class City {
    constructor(lat, lon) {
        this.lat = 	56.55272981;
        this.lon = 14.13893197;
        this.url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + this.lat + "&lon=" + this.lon;
        this.city = {};
    }

    fetchCity() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.city = data;
                    resolve();
                })
                .catch(error => {
                    reject(error);
                    
                });
        });
    }
}