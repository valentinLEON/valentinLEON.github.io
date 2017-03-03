// add service worker code here
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./serviceWorker.js')
        .then(function() { console.log('Service Worker Registered'); });
}