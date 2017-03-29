function initMap() {
    var mapValentin = new google.maps.Map(document.getElementById('mapValentin'), {
        center: {
            lat: 43.616757,
            lng: 7.0689172
        },
        zoom: 16,
    });
    var mapNicolas = new google.maps.Map(document.getElementById('mapNicolas'), {
        center: {
            lat: 43.616757,
            lng: 7.0689172
        },
        zoom: 16,
    });
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: pos,
                map: mapValentin,
                title: 'you are here!'
            });

            // infoWindow.setPosition(pos);
            marker.setMap(mapValentin);
            mapValentin.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: Le service de géolocalisation a failed.' :
        'Error: Votre navigateur ne supporte pas le service de navigation.');
}

/* On cache le bouton de fermeture de la map */
function hideCloseButton(id) {
    var nom = id.substring(8);
    console.log(nom);
    $("#" + id).css('display', 'none');
    $("#map" + nom).css('display', 'none');
}

/* on affiche le bouton de fermeture de la map */
function showCloseButton(id) {
    document.getElementById(id).style.display = 'inline-block';
}