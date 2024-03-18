/**
 * Class representerar en city.
 */
class City {
    /**
  * Skapar en city.
  * @param {number} lat - Latitud för city.
  * @param {number} lon - Longitude för city.
  */
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
        this.url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + this.lat + "&lon=" + this.lon;
        this.city = {};
    }
    /**
  * Hämtar city data från nätverket eller från localStorage om användaren är offline.
  * @return {Promise} Ett löfte som lyckas eller misslyckas beroende på om data kunde hämtas.
  */
    fetchCity() {
        return new Promise((resolve, reject) => {
            if (navigator.onLine) {
                // Användaren är online - hämta från nätverket
                fetch(this.url)
                    .then(response => response.json())
                    .then(data => {
                        this.city = data;
                        // Sparar data till localStorage
                        localStorage.setItem('city', JSON.stringify(data));
                        resolve();
                    })
                    .catch(error => {
                        reject('An error occurred while fetching the city data: ', error);
                    });
            } else {
                // Användaren är offline - hämtar data från localStorage
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