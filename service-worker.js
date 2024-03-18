/**
 * Namn på cachen som används för att lagra filer.
 * @type {string}
 */
const CACHE_NAME = 'pwa-cache-v1';

/**
 * URLs som ska cachelagras.
 * @type {string[]}
 */

const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '../src/js/css/style.css',
    '../src/js/Main.js',
    '../src/js/WeatherApp.js',
    '../src/js/Weather.js',
    '../src/js/UserPosition.js',
    '../src/js/City.js',
    '../src/js/Barometer.js',
    '../src/js/WeatherContainer.js',
    '../src/js/TempContainer.js',
    '../src/js/WindContainer.js',
    '../src/js/UserPositionContainer.js',
    '../src/js/HourlyWeather.js',
    '../src/js/BarometerContainer.js',
    '../src/js/FishAnimationContainer.js',
    '../src/js/img/barpointer.png',
    '../src/js/img/barometer2.png',
    '../src/js/img/sjo3.png',
    '../src/js/img/windDir1.png',
    '../src/js/img/abborre.png',
    '../src/js/weather/clearSky.png',
    '../src/js/weather/heavyrain.mp4',
    '../src/js/weather/lightrain.mp4',
    '../src/js/weather/mainlyClear.png',
    '../src/js/weather/overcast.png',
    '../src/js/weather/snow.mp4',
    '../src/js/icons/dimma.png',
    '../src/js/icons/halvklart.png',
    '../src/js/icons/lattregn.png',
    '../src/js/icons/mellanregn.png',
    '../src/js/icons/mycketregn.png',
    '../src/js/icons/oska.png',
    '../src/js/icons/regnosno.png',
    '../src/js/icons/sno.png',
    '../src/js/icons/sol.png',
    '../src/js/icons/nastanKlart.png',
    '../src/js/icons/molnigt.png',

];

/**
 * Installera service workern.
 */

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

/**
 * Hämta filer från cachen.
 */
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request) //
            .then(response => {
                // Kontrollera om vi fick ett svarsobjekt
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Klona svarsobjektet
                let responseToCache = response.clone();

                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, responseToCache); 
                    });

                return response;
            })
            .catch(() => {
                // Om vi inte är anslutna till internet, försök hämta från cachen
                return caches.match(event.request);
            })
    );
});