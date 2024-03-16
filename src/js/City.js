

class City {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
        this.url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + this.lat + "&lon=" + this.lon;
        this.city = {};
    }

    fetchCity() {
        return new Promise((resolve, reject) => {
            caches.match(this.url)
                .then(response => {
                    if (response) {
                        return response.json();
                    } else {
                        if (navigator.onLine) {
                            return fetch(this.url)
                                .then(response => response.json())
                                .catch(error => {
                                    reject(error);
                                });
                        } else {
                            reject('offline');
                        }
                    }
                })
                .then(data => {
                    if (data) {
                        this.city = data;
                        resolve();
                    }
                })
                .catch(error => {
                    return reject(error);
                });

        });
    }
}