var jsonV = {
    "nom": "Valentin LEON",
    "logo": "../images/scott.png",
    "description": "Je suis un jeune développeur, désirant parfaire mes compétences dans le domaine du développement." +
        "J'ai donc suivi un cursus informatique à l 'IUT de Nice Sophia-Antipolis en licence professionnelle Développement d'" +
        "Applications Mobile" +
        "Ce CV représente," +
        "mes compétences ainsi que mes expériences professionnelles dans le milieu du développement." +
        "Afin d\'avoir de plus amples renseignements sur mes projets, vous pouvez visiter mon lien github que vous pouvez retrouver ci-dessous."
};
var jsonN = {
    "nom": "Nicolas ORLANDINI",
    "logo": "../images/tardis.png",
    "description": "Je suis un jeune développeur, désirant parfaire mes compétences dans le domaine du développement." +
        "J'ai donc suivi un cursus informatique à l 'IUT de Nice Sophia-Antipolis en licence professionnelle Développement d'" +
        "Applications Mobile" +
        "Ce CV représente," +
        "mes compétences ainsi que mes expériences professionnelles dans le milieu du développement." +
        "Afin d\'avoir de plus amples renseignements sur mes projets, vous pouvez visiter mon lien github que vous pouvez retrouver ci-dessous."
};

var jsonValentin = JSON.stringify(jsonV);
var jsonNicolas = JSON.stringify(jsonN);

if (localStorage.nom != null) {
    if (localStorage.nom == "valentin") {
        var jsonparsed = $.parseJSON(jsonValentin);
        $("#avatar").attr("src", jsonparsed.logo);
        $("#description").append(jsonparsed.description);
        $("#githubLink").attr("href", "http://github.com/valentinLEON").append(jsonparsed.nom);
    } else if (localStorage.nom == "nicolas") {
        var jsonparsed = $.parseJSON(jsonNicolas);
        $("#avatar").attr("src", jsonparsed.logo);
        $("#description").append(jsonparsed.description);
        $("#githubLink").attr("href", "http://github.com/nicolasOrlandini").append(jsonparsed.nom);
    }
}

// (function() {
//     'use strict';

//     var about = {
//         isLoading: true,
//         visibleCards: {},
//         selectedCities: [],
//         spinner: document.querySelector('.loader'),
//         cardTemplate: document.querySelector('.cardTemplate'),
//         container: document.querySelector('.main'),
//         addDialog: document.querySelector('.dialog-container')
//     };


//     /* Formation */
//     var formationVal = {
//         "cardUne": {
//             "card_title": "Apprenti développeur .NET",
//             "card_content": "InnovationCRM",
//             "period": "En cours.",
//             "color": "cyan"
//         },
//         "cardDeux": {
//             "card_title": "Stage développeur Web",
//             "card_content": "Aigle Communication",
//             "period": "Déc. 2015 - Juin 2016",
//             "color": "deep-orange"
//         },
//         "cardTrois": {
//             "card_title": "Apprenti développeur .NET",
//             "card_content": "Exolink",
//             "period": "Avril 2015 - Nov. 2015",
//             "color": "purple"
//         }
//     };
//     var formationNico = {
//         "cardUne": {
//             "card_title": "Apprenti développeur .NET",
//             "card_content": "InnovationCRM",
//             "period": "En cours.",
//             "color": "cyan"
//         },
//         "cardDeux": {
//             "card_title": "Stage développeur Web",
//             "card_content": "Aigle Communication",
//             "period": "Déc. 2015 - Juin 2016",
//             "color": "deep-orange"
//         },
//         "cardTrois": {
//             "card_title": "Apprenti développeur .NET",
//             "card_content": "Exolink",
//             "period": "Avril 2015 - Nov. 2015",
//             "color": "purple"
//         }
//     };
//})();