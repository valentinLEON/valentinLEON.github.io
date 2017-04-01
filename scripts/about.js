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

(function() {
    'use strict';

    var about = {
        isLoading: true,
        visibleCards: {},
        selectedCities: [],
        spinner: document.querySelector('.loader'),
        cardTemplate: document.querySelector('.cardTemplate'),
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container')
    };
    /*
     * Expériences
     */
    var db = {
        "card1": {
            "card_title": "Apprenti développeur .NET",
            "card_content": "InnovationCRM",
            "period": "En cours.",
            "color": "cyan"
        },
        "card2": {
            "card_title": "Stage développeur Web",
            "card_content": "Aigle Communication",
            "period": "Déc. 2015 - Juin 2016",
            "color": "deep-orange"
        },
        "card3": {
            "card_title": "Apprenti développeur .NET",
            "card_content": "Exolink",
            "period": "Avril 2015 - Nov. 2015",
            "color": "purple"
        }
    };

    $.each(db, function(key, data) {
        console.log(key);
        $('#test5').append("<div class='card cardTemplate skill grey lighten-5'>");
        $('#test5 .card').append("<div class='card-content white-text " + data.color + " darken-1'><div class='name card_title'>" + data.card_title + "</div></div>");
        //Card Content
        $('#test5 .card').append("<i class='fa fa-5x' aria-hidden='true'></i><div style='margin-top:25px !important;' class='description'>" + data.card_content + "</div>");
        //Période de date pour la card view
        $('#test5 .card').append("<hr><div class='period'>" + data.period + "</div>");
        $('#test5').append("</div>");

        // switch (key) {
        //     case "card1":
        //         $('#test5').append("<div class='card cardTemplate skill grey lighten-5'>");
        //         $('#test5 .card').append("<div class='card-content white-text " + data.color + " darken-1'><div class='name card_title'>" + data.card_title + "</div></div>");
        //         //Card Content
        //         $('#test5 .card').append("<i class='fa fa-5x' aria-hidden='true'></i><div style='margin-top:25px !important;' class='description'>" + data.card_content + "</div>");
        //         //Période de date pour la card view
        //         $('#test5 .card').append("<hr><div class='period'>" + data.period + "</div>");
        //         $('#test5').append("</div>");
        //         break;
        //     case "card2":
        //         $('#test5').append("<div class='card cardTemplate skill grey lighten-5'>");
        //         $('#test5 .card').append("<div class='card-content white-text " + data.color + " darken-1'><div class='name card_title'>" + data.card_title + "</div></div>");
        //         //Card Content
        //         $('#test5 .card').append("<i class='fa fa-5x' aria-hidden='true'></i><div style='margin-top:25px !important;' class='description'>" + data.card_content + "</div>");
        //         //Période de date pour la card view
        //         $('#test5 .card').append("<hr><div class='period'>" + data.period + "</div>");
        //         $('#test5').append("</div>");
        //         break;
        //     case "card3":
        //         $('#test5').append("<div class='card cardTemplate skill grey lighten-5'>");
        //         $('#test5 .card').append("<div class='card-content white-text " + data.color + " darken-1'><div class='name card_title'>" + data.card_title + "</div></div>");
        //         //Card Content
        //         $('#test5 .card').append("<i class='fa fa-5x' aria-hidden='true'></i><div style='margin-top:25px !important;' class='description'>" + data.card_content + "</div>");
        //         //Période de date pour la card view
        //         $('#test5 .card').append("<hr><div class='period'>" + data.period + "</div>");
        //         $('#test5').append("</div>");
        //         break;
        // }

    });


    var updateExperiences1 = {
        key: '2459115',
        name: 'Apprenti développeur .NET',
        keyword: [
            "cv",
            "ER",
            "CM",
            "Mobile Natif",
            "App Store Optimisation",
            "Base de Données",
            "Publication Play Store"
        ],
        description: "InnovationCRM",
        period: "En cours.",
        code: 1
    };
    var updateExperiences2 = {
        key: '2459116',
        name: 'Apprenti développeur .NET',
        keyword: [
            "cv",
            "ER",
            "CM",
            "Mobile Natif",
            "App Store Optimisation",
            "Base de Données",
            "Publication Play Store"
        ],
        description: "Exolink",
        period: "Avril 2015 - Nov. 2016",
        code: 2
    };
    var updateExperiences3 = {
        key: '2459117',
        name: 'Stage développeur web',
        keyword: [
            "cv",
            "ER",
            "CM",
            "Mobile Natif",
            "App Store Optimisation",
            "Base de Données",
            "Publication Play Store"
        ],
        description: "Aigle Communication",
        period: "Déc. 2015 - Juin 2016",
        code: 3
    };

    //visibleCards.append(updateExperiences1, updateExperiences2, updateExperiences3);




})();