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
        caches.match(event.request)
        .then(response => {
            // Cache hit - return response
            if (response) {
                return response;
            }

            // Clone the request because it's a stream
            let fetchRequest = event.request.clone();

            return fetch(fetchRequest)
                .then(response => {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response because it's a stream
                    let responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
        })
    );
});
