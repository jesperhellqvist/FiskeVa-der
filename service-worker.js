

const CACHE_NAME = 'pwa-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '../src/js/css/style.css',
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
    '../src/js/img/barometer2.png',
    '../src/js/img/sjo3.png',
    '../src/js/img/windDir1.png',
    '../src/js/Main.js'
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
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then(response => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        }).catch(() => {
            var errorScreen = document.getElementById('errorScreen');
            errorScreen.style.display = 'flex';
        })
    );
});

