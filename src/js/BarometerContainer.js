

class BarometerContainer {
    constructor(weatherAppContainer) {
        this.barometerContainer = document.createElement('div');
        weatherAppContainer.appendChild(this.barometerContainer);
        this.barometerContainer.id = 'barometer-container';
        this.barometer = new Barometer(this.barometerContainer);
        this.background = document.createElement('img');
        this.background.src = './src/js/img/barometer.png';
        this.background.id = 'barometer-container-background';
        this.barometerContainer.appendChild(this.background);
        
       
    }

    update(hPa) {
        this.barometer.update(hPa);
    }

  
}