

function UserPosition() {
    this.latitude = 0;
    this.longitude = 0;
   
    this.getLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    this.showPosition = function(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        console.log("Latitude: " + this.latitude + " Longitude: " + this.longitude);
    }

    this.getLocation();
}