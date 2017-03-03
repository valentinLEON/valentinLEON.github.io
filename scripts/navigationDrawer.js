$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true
});
$('.collapsible').collapsible();

$(document).ready(function() {
    console.log('ottotoottoto');
    console.log($('nav').find('.side-nav').width());
});