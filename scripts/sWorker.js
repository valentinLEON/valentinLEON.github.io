// add service worker code here
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./serviceWorker.js')
        .then(function() { console.log('Service Worker Registered'); });
}
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('./serviceWorker.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }).catch(function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }