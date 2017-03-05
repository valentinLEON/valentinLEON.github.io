/**
 * Attention à la version de l'application
 */
// nom du cache
var cacheName = 'cerm v0.22';
// fichiers à mettre en cache
var filesToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/contact.html',
    '/creation.html',
    '/experience.html',
    '/schooling.html',
    '/skill.html',
    '/styles/inline.css',
    '/styles/app.css',
    '/styles/materialize.css',
    '/styles/timeline.css',
    '/styles/about.css',
    '/styles/home.css',
    '/scripts/app.js',
    '/scripts/materialize.js',
    '/scripts/navigationDrawer.js',
    '/fonts/BTTF.ttf',
    '/images/scott.png',
    '/images/tardis.png',
    '/images/background.png',
    '/images/delorean.jpg',
    '/images/euca.jpg',
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