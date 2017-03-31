// VARIABLES
var hauteurCardViewValentin = $(".ercagrossitValentin").height();
var hauteurCardViewNicolas = $(".cmcagrossitNicolas").height();

var width = $(window).width(),
    height = $(window).height();
$(window).on('load resize', function() {
    if ((width <= 450) && (height >= 768)) {
        $("span .customText").css('display', 'none');
    }
});

//on cache les deux maps
$("#mapValentin").hide();
$("#mapNicolas").hide();

//afficher la map pour valentin
$("#locationValentin").click(function() {
    $(".innerValentin").hide();
    $("#mapValentin").show();
    $(".containerParentValentin").height(300); // taille de la map
    var hauteurContainer = $(".containerParentValentin").height();
    var hauteurCardView = $(".ercagrossitValentin").height();
    $(".ercagrossitValentin").height(hauteurCardView + hauteurContainer);
});
//afficher la map pour nicolas
$("#locationNicolas").click(function() {
    $(".innerNicolas").hide();
    $("#mapNicolas").show();
    $(".containerParentNicolas").height(300); // taille de la map
    var hauteurContainer = $(".containerParentNicolas").height();
    var hauteurCardView = $(".cmcagrossitNicolas").height();
    $(".cmcagrossitNicolas").height(hauteurCardView + hauteurContainer);
});

//fermer la map pour valentin
$("#closeBtnValentin").click(function() {
    $(".innerValentin").show();
    $("#closeBtnValentin").hide();
    $(".containerParentValentin").height(75);
    $(".ercagrossitValentin").height(hauteurCardViewValentin);
});
//fermer la map pour nicolas
$("#closeBtnNicolas").click(function() {
    $(".innerNicolas").show();
    $("#closeBtnNicolas").hide();
    $(".containerParentNicolas").height(75);
    $(".cmcagrossitNicolas").height(hauteurCardViewValentin);
});

$("#about").click(function() {
    var divClassInner = $(this).parent().find("div[class^='inner']");
    if (divClassInner.find("[class~='Valentin'")) {
        localStorage.setItem('valentin', true);
    } else if (divClassInner.find("[class~='Nicolas'")) {
        localStorage.setItem('nicolas', true);
    }
});