

class BarometerContainer {
    constructor(weatherAppContainer) {
        this.barometerContainer = document.createElement('div');
        weatherAppContainer.appendChild(this.barometerContainer);
        this.barometerContainer.id = 'barometer-container';
        this.barometer = new Barometer(this.barometerContainer);
        
       
    }

  
}