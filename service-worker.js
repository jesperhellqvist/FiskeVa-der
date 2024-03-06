const CACHE_NAME = 'pwa-cache-v1';

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
    '../src/js/img/barometer2.png',
    '../src/js/img/sjo3.png',
    '../src/js/img/windDir1.png',
    '../src/js/img/abborre.png',
    '../src/js/weather/clearSky.png',
    '../src/js/weather/heavyrain.gif',
    '../src/js/weather/lightrain.gif',
    '../src/js/weather/mainlyClear.png',
    '../src/js/weather/overcast.png',
    '../src/js/weather/snow.gif',
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
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // No cache hit, make network request
                return fetch(event.request)
                    .then(response => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // If the request is for the API, cache the response
                        if (event.request.url.startsWith('https://api.open-meteo.com')) {
                            // Clone the response because it's a stream
                            let responseToCache = response.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }

                        return response;
                    });
            })
    );
});
