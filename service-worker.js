

const CACHE_NAME = 'pwa-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '../src/js/Main.js',
    '../src/js/css/style.css',
    '../src/js/WeatherApp.js',
    '../src/js/Weather.js',
    '../src/js/UserPosition.js',
    '../src/js/City.js',
    '../src/js/WeatherContainer.js',
    '../src/js/TempContainer.js',
    '../src/js/WindContainer.js',
    '../src/js/UserPositionContainer.js',
    '../src/js/HourlyWeather.js',
    '../src/js/BarometerContainer.js',
    '../src/js/FishAnimationContainer.js',
    '../src/js/img/barometer2.png',
    '../src/js/img/sjo3.png',
    '../src/js/img/windDir1.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

