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
        Main.pullToRefresh(weatherApp);

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
    /**
     * Hanterar pull to refresh.
     * @param {WeatherApp} weatherApp - Väder app objektet.
     * @returns {undefined} - Inget returvärde.
     * 
        */

    pullToRefresh: function (weatherApp) {
        let startY;
        let endY;
        let isPullingDown = false;
    
        window.addEventListener('touchstart', (event) => {
            startY = event.touches[0].clientY;
        }, false);
    
        window.addEventListener('touchmove', (event) => {
            endY = event.touches[0].clientY;
            if (endY > startY) {
                isPullingDown = true;
            }
        }, false);
    
        window.addEventListener('touchend', (event) => {
            
            if (isPullingDown && endY - startY > 100) {
                console.log('pull down');
                weatherApp.refresh();
            }
            isPullingDown = false;
        }, false);
    },

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