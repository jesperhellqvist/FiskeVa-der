

class Barometer {
    constructor(barometerContainer) {
        this.barometer = document.createElement('div');
        this.barometer.id = 'barometer';
        barometerContainer.appendChild(this.barometer);
        this.pElement = document.createElement('p');
        this.barometer.appendChild(this.pElement);
        this.img = document.createElement('img');
        this.img.src = './src/js/img/barpointer.png';
        this.img.id = 'barpointer';
        barometerContainer.appendChild(this.img);


        
    }

    update(hPa) {

        hPa = Math.floor(hPa);
        
        this.pElement.innerHTML = hPa + ' hPa';
        var deg = ((hPa - 961) / (1060 - 961)) * 180 - 90;

        this.img.style.transform = 'translateX(-50%) rotate(' + deg + 'deg)';
        console.log(deg);
    }

    
}