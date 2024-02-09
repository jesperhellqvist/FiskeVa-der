
var Main = {

    init: function () {
        var weatherApp = new WeatherApp();

        // var userPosition = new UserPosition();
        // userPosition.locationPromise.then(() => {
        //     var weatherApp = new WeatherApp(userPosition.lat, userPosition.lon);
        // }).catch(error => {
        //     console.log(error);
        // });

    }

}

window.addEventListener('load', Main.init);