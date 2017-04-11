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

var hauteurContainer = $(".containerParentValentin").height();
var hauteurCardView = $(".ercagrossitValentin").height();
$(".ercagrossitValentin").height(hauteurCardView + hauteurContainer - 75);

var hauteurContainer = $(".containerParentNicolas").height();
var hauteurCardView = $(".cmcagrossitNicolas").height();
$(".cmcagrossitNicolas").height(hauteurCardView + hauteurContainer - 75);

function displayAbout() {
    localStorage.removeItem("nom");
    var nodeParent = $(event.target).closest('button');
    if (nodeParent.hasClass("valentin")) {
        localStorage.setItem("nom", "valentin");
    } else if (nodeParent.hasClass("nicolas")) {
        localStorage.setItem("nom", "nicolas");
    }
}