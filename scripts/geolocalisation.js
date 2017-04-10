function initMap() {

    var mapValentin = {
        center: new google.maps.LatLng(43.648152, 6.919765),
        zoom: 16,
    };
    var mapNicolas = {
        center: new google.maps.LatLng(43.718399, 7.256210),
        zoom: 16,
    };
    var coordValentin = new google.maps.LatLng(43.648152, 6.919765);
    var map = new google.maps.Map(document.getElementById("mapValentin"), mapValentin);
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: coordValentin
    });
    marker.addListener('click', toggleBounce);
    setTimeout(function() { marker.setAnimation(null); }, 750);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    // var coordNicolas = new google.maps.LatLng(43.648152, 6.919765);
    // markerNicolas = new google.maps.Marker({
    //     map: map,
    //     // draggable: true,
    //     animation: google.maps.Animation.DROP,
    //     position: coordNicolas
    // });

    // var mapNicolas = new google.maps.Map(document.getElementById('mapNicolas'), mapNicolas);
    // markerNicolas.setMap(mapNicolas);

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: Le service de géolocalisation a failed.' :
        'Error: Votre navigateur ne supporte pas le service de navigation.');
}

// On cache le bouton de fermeture de la map /
// function hideCloseButton(id) {
//     var nom = id.substring ;
//     console.log(nom);
//     $("#" + id).css('display', 'none');
//     $("#map" + nom).css('display', 'none');
// }

// on affiche le bouton de fermeture de la map /
// function showCloseButton(id) {
//     document.getElementById(id).style.display = 'inline-block';
// }