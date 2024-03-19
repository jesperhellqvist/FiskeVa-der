/**
 * Main class hanterar navigation och service worker registrering.
 */
var Main = {
    /**
     * Initierar applikationen.
     */
    init: function () {
        var weatherApp = new WeatherApp();
        Main.handleNavigation();
        Main.registerServiceWorker();
        Main.pullToRefresh();

    },
    /**
       * Hanterar navigation events.
       */
    handleNavigation: function () {
        var navUl = document.getElementsByTagName('nav')[0];
        navUl.addEventListener('click', Main.handleNavClick);
    },
    /**
       * Hanterar click events på navigeringsknapparna.
       * @param {Event} event - The click event.
       * @returns {undefined} - Inget returvärde.
       */
    handleNavClick: function (event) {
        var target = event.target;
        if (target.tagName === 'A') {
            event.preventDefault();

            var divs = document.getElementsByClassName('thisPage');
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }

            var id = target.getAttribute('href').slice(1);
            var section = document.getElementById(id);
            section.style.display = 'flex';
        }
    },

    pullToRefresh: function () {
        this.window.addEventListener('touchstart', (event) => {
            var startY = event.touches[0].clientY;
        }, false);

        this.window.addEventListener('touchmove', (event) => {
            var endY = event.touches[0].clientY;
            if (endY > startY) {
                console.log('pull down');
                Main.weatherApp.refreshWeatherData();
            }
        }, false);
    },
    // pullToRefresh: function () {

    //     window.addEventListener('touchstart', Main.handleTouchStart.bind(this), false);
    //     window.addEventListener('touchmove', Main.handleTouchMove.bind(this), false);
    //     Main.xDown = null;
    //     Main.yDown = null;

    // },

    // handleTouchStart: function (evt) {
    //     console.log('touchstart');
    //     Main.xDown = evt.touches[0].clientX;
    //     Main.yDown = evt.touches[0].clientY;
    // },

    // handleTouchMove: function (evt) {
    //     console.log('touchmove');
    //     if (!Main.xDown || !Main.yDown) {
    //         console.log('return');
    //         return;
    //     }

    //     var xUp = evt.touches[0].clientX;
    //     var yUp = evt.touches[0].clientY;

    //     var xDiff = Main.xDown - xUp;
    //     var yDiff = Main.yDown - yUp;
    //     if ( Math.abs( xDiff ) < Math.abs( yDiff ) && yDiff < 0 ) {
    //         console.log('pull down');
    //         /* reset values */
    //         Main.xDown = null;
    //         Main.yDown = null;
    //         // Refresh the weather data
    //         Main.weatherApp.refreshWeatherData();
    //         evt.preventDefault();
    //     }  
    // },

    /**
       * Registrerar service worker.
       */
    registerServiceWorker: function () {

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        }
    }

}

window.addEventListener('load', Main.init);