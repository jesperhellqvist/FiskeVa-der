
var Main = {

    init: function () {
        var weatherApp = new WeatherApp();
        Main.handleNavigation();
        Main.registerServiceWorker();

    },

    handleNavigation: function () {
        var navUl = document.getElementsByTagName('nav')[0];
        navUl.addEventListener('click', Main.handleNavClick);
    },

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

    registerServiceWorker: function () {
        console.log('steg 1');
        if ('serviceWorker' in navigator) {
            console.log('steg 2');
            navigator.serviceWorker.register('./../../service-worker.js')
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