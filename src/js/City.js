/**
 * Class representing a city.
 */
class City {
    /**
  * Create a city.
  * @param {number} lat - The latitude of the city.
  * @param {number} lon - The longitude of the city.
  */
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
        this.url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + this.lat + "&lon=" + this.lon;
        this.city = {};
    }
    /**
  * Fetch city data from the network or from localStorage if offline.
  * @return {Promise} A promise that resolves when the data is fetched.
  */
    fetchCity() {
        return new Promise((resolve, reject) => {
            if (navigator.onLine) {
                // User is online - fetch from the network
                fetch(this.url)
                    .then(response => response.json())
                    .then(data => {
                        this.city = data;
                        // Save the data to localStorage
                        localStorage.setItem('city', JSON.stringify(data));
                        resolve();
                    })
                    .catch(error => {
                        reject('An error occurred while fetching the city data: ', error);
                    });
            } else {
                // User is offline - get the data from localStorage
                const data = JSON.parse(localStorage.getItem('city'));
                if (data) {
                    console.log('Using cached city data');
                    this.city = data;
                    resolve();
                } else {
                    reject('No data available');
                }
            }
        });
    }
}