/**
 * Attention à la version de l'application
 */
// nom du cache
var cacheName = 'cerm v0.7';
// fichiers à mettre en cache
var filesToCache = [
    '/',
    '/index.html',
    '/scripts/app.js',
    '/styles/inline.css',
    '/styles/app.css',
    '/styles/materialize.min.css',
    '/scripts/materialize.min.js',
    '/scripts/navigationDrawer.js',
    '/styles/timeline.css',
    '/images/ic_refresh_white_24px.svg',
    '/fonts/BTTF.ttf',
    '/fonts/roboto/',
    '/images/ER.jpg',
    '/images/abstract.jpg'
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