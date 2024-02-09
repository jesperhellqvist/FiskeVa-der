

class City {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
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