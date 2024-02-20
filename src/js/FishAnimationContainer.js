

class FishAnimationContainer {
  constructor(weatherAppContainer) {
    this.fishAnimationContainer = document.createElement('div');
    weatherAppContainer.appendChild(this.fishAnimationContainer);
    this.fishAnimationContainer.id = 'fish-animation-container';
    this.fishImg = document.createElement('img');
    this.fishImg.src = '../src/js/img/abborre.png';
    //this.fishImg.id = 'fish';

    this.fishImg.id = 'fish';
    this.fishAnimationContainer.appendChild(this.fishImg);
  }


  setFishId(hPa){

    if(hPa < 1010){
      this.fishImg.id = 'fish';
    }
    else{
      this.fishImg.id = 'fishActive';
    }

  }
}