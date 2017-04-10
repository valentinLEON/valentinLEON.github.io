// VARIABLES
var hauteurCardViewValentin = $(".ercagrossitValentin").height();
var hauteurCardViewNicolas = $(".cmcagrossitNicolas").height();

var width = $(window).width(),
    height = $(window).height();
$(window).on('load resize', function() {
    if ((width <= 450) && (height >= 768)) {
        $("span .customText").css('display', 'none');
        // $("#mapValentin").hide();
        // $("#mapNicolas").hide();
    }
});

var hauteurContainer = $(".containerParentValentin").height();
var hauteurCardView = $(".ercagrossitValentin").height();
$(".ercagrossitValentin").height(hauteurCardView + hauteurContainer - 75);

var hauteurContainer = $(".containerParentNicolas").height();
var hauteurCardView = $(".cmcagrossitNicolas").height();
$(".cmcagrossitNicolas").height(hauteurCardView + hauteurContainer - 75);


//afficher la map pour valentin
// $("#locationValentin").click(function() {
//     $(".innerValentin").hide();
//     $("#mapValentin").show();
//     $(".containerParentValentin").height(300); // taille de la map
//     var hauteurContainer = $(".containerParentValentin").height();
//     var hauteurCardView = $(".ercagrossitValentin").height();
//     $(".ercagrossitValentin").height(hauteurCardView + hauteurContainer);
// });
//afficher la map pour nicolas
// $("#locationNicolas").click(function() {
//     $(".innerNicolas").hide();
//     $("#mapNicolas").show();
//     $(".containerParentNicolas").height(300); // taille de la map
//     var hauteurContainer = $(".containerParentNicolas").height();
//     var hauteurCardView = $(".cmcagrossitNicolas").height();
//     $(".cmcagrossitNicolas").height(hauteurCardView + hauteurContainer);
// });

//fermer la map pour valentin
// $("#closeBtnValentin").click(function() {
//     $(".innerValentin").show();
//     $("#closeBtnValentin").hide();
//     $(".containerParentValentin").height(75);
//     $(".ercagrossitValentin").height(hauteurCardViewValentin);
// });
//fermer la map pour nicolas
// $("#closeBtnNicolas").click(function() {
//     $(".innerNicolas").show();
//     $("#closeBtnNicolas").hide();
//     $(".containerParentNicolas").height(75);
//     $(".cmcagrossitNicolas").height(hauteurCardViewValentin);
// });


function displayAbout() {
    localStorage.removeItem("nom");
    var nodeParent = $(event.target).closest('button');
    if (nodeParent.hasClass("valentin")) {
        localStorage.setItem("nom", "valentin");
    } else if (nodeParent.hasClass("nicolas")) {
        localStorage.setItem("nom", "nicolas");
    }
}