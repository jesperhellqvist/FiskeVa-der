class UserPosition {
  constructor() {
    this.latitude = null;
    this.longitude = null;
    this.locationPromise = this.getCurrentPosition();
  }

  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            resolve({ latitude: this.latitude, longitude: this.longitude });
          },
          error => {
            if (error.code === error.PERMISSION_DENIED) {
              alert('Du måste tillåta platsinformation för att använda denna app.');
            }
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }
}


