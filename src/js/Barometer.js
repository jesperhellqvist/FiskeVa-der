

class Barometer {
    constructor(barometerContainer) {
        this.barometer = document.createElement('div');
        this.barometer.id = 'barometer';
        barometerContainer.appendChild(this.barometer);
        this.pElement = document.createElement('p');
        this.barometer.appendChild(this.pElement);



        this.createImage(barometerContainer);
    }

    update(hPa) {
        console.log(hPa);
        this.pElement.innerHTML = hPa + ' hPa';
    }

    createImage(barometerContainer){

        var img = document.createElement('img');
        img.src = './src/js/img/barpointer.png';
        img.id = 'barpointer';
        barometerContainer.appendChild(img);

    }
}