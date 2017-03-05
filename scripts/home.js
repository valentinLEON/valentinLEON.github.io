$("#map").hide();
$("#location").click(function() {
    $(".inner").hide();
    $("#map").show();
    $(".containerParent").height(400);
});

$("#closeBtn").click(function() {
    $("#map").hide();
    $(".inner").show();
    $("#closeBtn").hide();
    $(".containerParent").height(150);
});