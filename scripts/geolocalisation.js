function initMap() {

    // coordonnées des deux devs
    var coordValentin = new google.maps.LatLng(43.648152, 6.919765);
    var coordNicolas = new google.maps.LatLng(43.718399, 7.256210);

    var optionsValentin = {
        center: coordValentin,
        zoom: 16,
    };
    var optionsNicolas = {
        center: coordNicolas,
        zoom: 16,
    };

    // initialisation des maps
    var mapValentin = new google.maps.Map(document.getElementById("mapValentin"), optionsValentin);
    var mapNicolas = new google.maps.Map(document.getElementById('mapNicolas'), optionsNicolas);

    // les marqueurs
    marker = new google.maps.Marker({
        map: mapValentin,
        animation: google.maps.Animation.DROP,
        position: coordValentin,
        title: 'Valentin LEON'
    });
    markerNicolas = new google.maps.Marker({
        map: mapNicolas,
        animation: google.maps.Animation.DROP,
        position: coordNicolas,
        title: 'Nicolas ORLANDINI'
    });
    // on affecte l'animation sur les marqueurs
    marker.addListener('click', toggleBounce);
    markerNicolas.addListener('click', toggleBounce);

    // on stoppe l'animation au bout d'une seconde
    setTimeout(function() { marker.setAnimation(null); }, 1000);
    setTimeout(function() { markerNicolas.setAnimation(null); }, 1000);

    // fonction d'animation pour les marqueurs
    function toggleBounce() {
        if (marker.getAnimation() === null) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            markerNicolas.setAnimation(null);
        } else if (markerNicolas.getAnimation() === null) {
            markerNicolas.setAnimation(google.maps.Animation.BOUNCE);
            marker.setAnimation(null);
        } else {
            markerNicolas.setAnimation(null);
            marker.setAnimation(null);
        }
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: Le service de géolocalisation a failed.' :
        'Error: Votre navigateur ne supporte pas le service de navigation.');
}