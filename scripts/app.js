(function () {
    'use strict';

    var app = {
        isLoading: true,
        visibleCards: {},
        visibleTimelineCards: {},
        visibleImage: {},
        spinner: document.querySelector('.loader'),
        cardTemplate: document.querySelector('.cardTemplate'),
        timelineTemplate: document.querySelector('.timelineTemplate'),
        imageTemplate: document.querySelector('.imageTemplate'),
        container: document.querySelector('.mainCard'),
        containerTimeline: document.querySelector('.mainTimeline .timeline'),
        containerCarousel: document.querySelector('.carousel'),
        addDialog: document.querySelector('.dialog-container')
    };

    /*****************************************************************************
     *
     * Methods to update/refresh the UI
     *
     ****************************************************************************/
    app.updateExpCard = function (data) {
        var dataLastUpdated = new Date(data.created);
        var code = data.code
        var description = data.description;
        var period = data.period;
        var name = data.name;
        var card = app.visibleCards[data.key];
        var color = data.color;
        if (!card) {
            card = app.cardTemplate.cloneNode(true);
            card.classList.remove('cardTemplate');
            card.querySelector('.name').textContent = name;
            card.querySelector('.myCard').className += " " + color;
            card.removeAttribute('hidden');
            app.container.appendChild(card);
            app.visibleCards[data.key] = card;
        }
        card.querySelector('.description').textContent = description;
        card.querySelector('.period').textContent = period;
        // pour ajouter une icône
        //card.querySelector('.fa').classList.add(app.getIconClass(code));
        loading();
    };
    app.updateSchoolCard = function (data) {
        var dataLastUpdated = new Date(data.created);
        var customCardTitle = data.customCardTitle;
        var timelineDate = data.timelineDate;
        var name = data.name;
        var url = data.url;
        var color = data.color;
        var card = app.visibleTimelineCards[data.key];
        if (!card) {
            card = app.timelineTemplate.cloneNode(true);
            card.classList.remove('timelineTemplate');
            card.querySelector('.imageTimeline').setAttribute('src', url);
            card.querySelector('.customCardTitle').textContent = customCardTitle;
            card.querySelector('.card-timeline-name').textContent = name;
            if (data.numero != 1) {
                card.classList.remove('firstCardview');
                card.classList.remove('no-before'); //on supprime la première barre de la timeline
            }
            card.removeAttribute('hidden');
            app.containerTimeline.appendChild(card);
            app.visibleTimelineCards[data.key] = card;
        }
        card.querySelector('.timelineDate').textContent = timelineDate;
        card.querySelector('.myBubble').className += " " + color;
        // pour ajouter une icône
        //card.querySelector('.fa').classList.add(app.getIconClass(code));
        loading();
    };

    app.updateCarousel = function (data) {
        // Carousel centre d'intérêts
        $('.carousel').carousel();
        var image = app.visibleImage[data.key];
        var images = data.images;
        if (!image) {
            image = app.imageTemplate.cloneNode(true);
            image.classList.remove('imageTemplate');
            for (var i = 0; i < images.length; i++) {
                image.querySelector('a.carousel-item').innerHTML = '<img src="' + images[i] + '">';
                // $('.carousel-item').append('<img class="imageCarousel" src="' + images[i] + '">');

            }
            app.visibleImage[data.key] = image;
        }
        loading();

    }

    var loading = function () {
        if (app.isLoading) {
            app.spinner.setAttribute('hidden', true);
            app.containerTimeline.removeAttribute('hidden');
            app.isLoading = false;
        }
    }
    /*****************************************************************************
     *
     * Methods for dealing with the model
     *
     ****************************************************************************/
    app.getProject = function (key, label) {
        // var statement = 'select * from cv.project where woeid=' + key;
        // var url = 'put a url' + statement;
        //Fetch the latest data.
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    var response = JSON.parse(request.response);
                    var results = response.query.results;
                    results.key = key;
                    results.label = label;
                    results.created = response.query.created;
                    app.updateExpCard(results);
                }
            } else {
                if (localStorage.nom == "valentin") {
                    app.updateExpCard(updateExperiencesValentin1);
                    app.updateExpCard(updateExperiencesValentin2);
                    app.updateExpCard(updateExperiencesValentin3);
                } else if (localStorage.nom == "nicolas") {
                    app.updateExpCard(updateExperiencesNicolas1);
                    app.updateExpCard(updateExperiencesNicolas2);
                }
            }
        };
        request.open('GET', url);
        request.send();
    };
    // Iterate all of the cards and attempt to get the latest forecast data
    app.updateSkills = function () {
        var keys = Object.keys(app.visibleCards);
        keys.forEach(function (key) {
            app.getForecast(key);
        });
        var keysT = Object.keys(app.visibleTimelineCards);
        keysT.forEach(function (key) {
            app.getForecast(key);
        });
    };

    // TODO: récupérer des icônes sympas...
    app.getIconClass = function (expCode) {
        expCode = parseInt(expCode);
        switch (expCode) {
            case 1:
            case 2:
            case 3:
            case 7:
            case 4:
            case 5:
            case 6:
        }
    };

    var imagesValentin = {
        key: '25456',
        created: '2017-04-16T18:44:00',
        images: [
            '../images/er.jpg',
            '../images/snow.jpg',
            '../images/snow2.jpg'
        ]
    }
    var imagesNicolas = {
        key: '25457',
        created: '2017-04-16T19:44:00',
        images: [
            '../images/cm.jpg',
            '../images/captain.jpg',
            '../images/nomnomnom.jpg'
        ]
    }

    /* Objets expérience */
    var updateExperiencesValentin1 = {
        key: '2459115', //2459115
        name: 'Apprenti développeur .NET',
        created: '2017-02-26T18:13:00Z',
        description: "InnovationCRM",
        period: "En cours.",
        code: 1, // pour le logo
        color: "purple"
    };
    var updateExperiencesValentin2 = {
        key: '2459116',
        name: 'Stage développeur Web',
        created: '2017-02-27T18:13:00Z',
        description: "Aigle Communication",
        period: "Déc. 2015 - Juin 2016",
        code: 1, // pour le logo
        color: "deep-orange"
    };
    var updateExperiencesValentin3 = {
        key: '2459117',
        name: 'Apprenti développeur .NET',
        created: '2017-02-28T18:13:00Z',
        description: "Exolink",
        period: "Avril 2015 - Nov. 2015",
        code: 1, // pour le logo
        color: "cyan"
    };

    var updateExperiencesNicolas1 = {
        key: '2459110', //2459115
        name: 'Stage Configuration commutateurs et bornes wifi',
        created: '2017-02-22T18:13:00Z',
        description: "Métropôle Nice Côte d'Azur",
        period: "Mai 2015 – Juil. 2015",
        code: 1, // pour le logo
        color: "purple"
    };
    var updateExperiencesNicolas2 = {
        key: '2459111',
        name: 'Aide Electricien',
        created: '2017-02-23T18:13:00Z',
        description: "Electric' Antennes-Azur technisat",
        period: "Aout 2013 – Sept. 2013",
        code: 1, // pour le logo
        color: "deep-orange"
    }

    var updateSchoolValentin1 = {
        key: '2459130',
        name: 'IUT - Nice Sophia-Antipolis',
        url: '../images/iut.png',
        created: '2017-02-26T19:13:00Z',
        customCardTitle: "Licence Professionnelle - Développement Application Mobile",
        timelineDate: "2017  2016",
        color: "orange",
        numero: 1
    }
    var updateSchoolValentin2 = {
        key: '2459131',
        name: 'UFIP - Nice',
        url: '../images/ufip.png',
        created: '2017-02-26T18:13:00Z',
        customCardTitle: "BTS - Services Informatique aux Organisations",
        timelineDate: "2016  2014",
        color: "red",
        numero: 2
    }
    var updateSchoolValentin3 = {
        key: '2459132',
        name: 'Université Valrose - Nice Sophia-Antipolis',
        url: '../images/valrose.jpg',
        created: '2017-02-26T17:13:00Z',
        customCardTitle: "Licence 2 Math Informatique",
        timelineDate: "2014  2011",
        color: "blue",
        numero: 3
    }
    var updateSchoolNicolas1 = {
        key: '2459140',
        name: 'IUT - Nice Sophia-Antipolis',
        url: '../images/iut.png',
        created: '2017-02-26T19:13:00Z',
        customCardTitle: "Licence Professionnelle - Développement Application Mobile",
        timelineDate: "2017  2016",
        color: "orange",
        numero: 1
    }
    var updateSchoolNicolas2 = {
        key: '2459141',
        name: 'Lycée les Eucalyptus - Nice',
        url: '../images/euca.jpg',
        created: '2017-02-26T18:13:00Z',
        customCardTitle: "BTS - Systèmes Numériques, Option Informatique & Réseaux",
        timelineDate: "2016  2014",
        color: "red",
        numero: 2
    }
    var updateSchoolNicolas3 = {
        key: '2459142',
        name: 'Lycée Parc Impérial - Nice',
        url: '../images/imperial.jpg',
        created: '2017-02-26T17:13:00Z',
        customCardTitle: "Baccalauréat - Série S, Option ISN",
        timelineDate: "2014  2011",
        color: "blue",
        numero: 3
    }

    if (localStorage.nom == "valentin") {
        app.updateExpCard(updateExperiencesValentin1);
        app.updateExpCard(updateExperiencesValentin2);
        app.updateExpCard(updateExperiencesValentin3);

        if (updateSchoolValentin1.numero == 1) {
            $('.timeline-event').addClass('no-before'); //Remove before
        }

        app.updateSchoolCard(updateSchoolValentin1);
        app.updateSchoolCard(updateSchoolValentin2);
        app.updateSchoolCard(updateSchoolValentin3);

        app.updateCarousel(imagesValentin);
    } else if (localStorage.nom == "nicolas") {
        app.updateExpCard(updateExperiencesNicolas1);
        app.updateExpCard(updateExperiencesNicolas2);

        if (updateSchoolNicolas1.numero == 1) {
            $('.timeline-event').addClass('no-before'); //Remove before
        }

        app.updateSchoolCard(updateSchoolNicolas1);
        app.updateSchoolCard(updateSchoolNicolas2);
        app.updateSchoolCard(updateSchoolNicolas3);
    }



})();