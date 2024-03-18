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