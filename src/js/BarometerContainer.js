

class BarometerContainer {
    constructor(weatherAppContainer) {
        this.barometerContainer = document.createElement('div');
        this.barometer = new Barometer(this.barometerContainer);
        this.background = document.createElement('img');

        this.addElements(weatherAppContainer);


    }

    addElements(weatherAppContainer) {
        this.barometerContainer.id = 'barometer-container';
        weatherAppContainer.appendChild(this.barometerContainer);
        this.background.src = './src/js/img/barometer2.png';
        this.background.id = 'barometer-container-background';
        this.barometerContainer.appendChild(this.background);
    }

    update(hPa) {
        this.barometer.update(hPa);
    }


}