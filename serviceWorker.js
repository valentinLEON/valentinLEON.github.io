/**
 * Attention à la version de l'application
 */
// nom du cache
var cacheName = 'cerm v1.0.2';
// fichiers à mettre en cache
var filesToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/contact.html',
    '/creation.html',
    '/styles/inline.css',
    '/styles/app.css',
    '/styles/materialize.css',
    '/styles/timeline.css',
    '/styles/home.css',
    '/styles/about.css',
    '/styles/alertify.css',
    '/scripts/app.js',
    '/scripts/materialize.js',
    '/scripts/navigationDrawer.js',
    '/scripts/contact.js',
    '/scripts/alertify.js',
    '/scripts/geolocalisation.js',
    '/scripts/about.js',
    '/fonts/BTTF.ttf',
    '/images/scott.png',
    '/images/tardis.png',
    '/images/background.png',
    '/images/bender.png',
    '/images/euca.jpg',
    '/images/iut.png',
    '/images/imperial.jpg',
    '/images/ufip.png',
    '/images/valrose.jpg',
    '/images/geotweetLP.png',
    '/images/Samaritan.png',
    '/images/delorean.jpg',
    '/images/guitare.jpg',
    '/images/snow.jpg',
    '/images/snow2.jpg',
    '/images/nomnomnom.jpg',
    '/images/er.jpg',
    '/images/cm.jpg',
    '/images/captain.jpg',
    '/images/icons/facebook.png',
    '/images/icons/googleplus.png',
    '/images/icons/linkedin.png',
    '/images/icons/twitter.png'
];

// Mise en place du cache
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

// Mise à jour du nouveau cache
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// affiche les éléments du cache
self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});