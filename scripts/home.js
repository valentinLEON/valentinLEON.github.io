// var cardView = "<div class='card mapCard'><div class='card-content'><div id='map'></div></div></div>";

// var oldContent = "<div class='inner box1'><a href='#'><span class='parent'><i class='medium material-icons customIcon'>view_list</i></span></a></div>" +
//     "<div class='inner box2'><a href='#'><span class='parent'><i id= 'location' class= 'medium material-icons customIcon'>location_on</i></span></a></div>" +
//     "<div class='inner box3'><a href='/contact.html'><span class='parent'> <i class = medium material-icons customIcon'>email</i></span></a></div>";

$("#map").hide();
$("#location").click(function() {
    $(".inner").hide();
    $("#map").show();
    $(".containerParent").height(400);
});