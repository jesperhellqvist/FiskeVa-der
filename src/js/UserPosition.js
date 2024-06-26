/**
 * Class representerar användarens position.
 */
class UserPosition {
  /**
   * Skapar en user's position.
   */
  constructor() {
    this.latitude = null;
    this.longitude = null;
    this.locationPromise = this.getCurrentPosition();
  }
/**
   * Hämtar användarens position.
   * @returns {Promise} - Ett löfte som lyckas eller misslyckas beroende på om positionen kunde hämtas.
   */
  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            // Save the position to localStorage
            localStorage.setItem('latitude', this.latitude);
            localStorage.setItem('longitude', this.longitude);
            resolve({ latitude: this.latitude, longitude: this.longitude });
          },
          error => {
            if (error.code === error.PERMISSION_DENIED) {
              alert('Du måste tillåta platsinformation för att använda denna app.');
            }
            // If the user is offline, get the position from localStorage
            if (!navigator.onLine) {
              const latitude = localStorage.getItem('latitude');
              const longitude = localStorage.getItem('longitude');
              if (latitude && longitude) {
                resolve({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
              } else {
                reject('No position available.');
              }
            } else {
              reject(error);
            }
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }
}


