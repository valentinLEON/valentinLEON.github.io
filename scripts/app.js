(function () {
    'use strict';

    var app = {
        isLoading: true,
        visibleCards: {},
        visibleTimelineCards: {},
        spinner: document.querySelector('.loader'),
        cardTemplate: document.querySelector('.cardTemplate'),
        timelineTemplate: document.querySelector('.timelineTemplate'),
        container: document.querySelector('.mainCard'),
        containerTimeline: document.querySelector('.mainTimeline'),
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
        if (app.isLoading) {
            app.spinner.setAttribute('hidden', true);
            app.container.removeAttribute('hidden');
            app.isLoading = false;
        }
    };
    app.updateSchoolCard = function (data) {
        console.log(data);
        var dataLastUpdated = new Date(data.created);
        var customCardTitle = data.customCardTitle;
        var timelineDate = data.timelineDate;
        var name = data.name;
        var url = data.url;
        var card = app.visibleTimelineCards[data.key];
        if (!card) {
            card = app.cardTemplate.cloneNode(true);
            card.classList.remove('timelineTemplate');
            card.querySelector('.imageTimeline').setAttribute('src', url);
            // $("img .imageTimeline").attr("src", url);
            // $("p .card-timeline-name").append(name);
            //card.querySelector('card-timeline-title').textContent = name;
            card.removeAttribute('hidden');
            app.containerTimeline.appendChild(card);
            app.visibleTimelineCards[data.key] = card;
        }
        //$(".card-timeline-name").append(customCardTitle);
        //$("span .timeLineDate").append(timelineDate);
        // card.querySelector('.card-timeline-name').textContent = customCardTitle;
        // card.querySelector('.timelineDate').textContent = timelineDate;
        // pour ajouter une icône
        //card.querySelector('.fa').classList.add(app.getIconClass(code));
        if (app.isLoading) {
            app.spinner.setAttribute('hidden', true);
            app.container.removeAttribute('hidden');
            app.isLoading = false;
        }
    };
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
                }
                else if (localStorage.nom == "nicolas") {
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
        name: 'IUT Nice Sophia-Antipolis',
        url: '/images/iut.png',
        created: '2017-02-26T18:13:00Z',
        customCardTitle: "Licence Professionnelle - Développement Application Mobile",
        timelineDate: "2017  2016",
        color: "orange"
    }
    var updateSchoolValentin2 = {
        key: '2459131',
        name: 'UFIP - <i>Nice</i>',
        url: '/images/ufip.png',
        created: '2017-02-26T18:13:00Z',
        customCardTitle: "BTS - Services Informatique aux Organisations",
        timelineDate: "2016  2014",
        color: "red"
    }
    // uncomment line below to test app with fake data
    if (localStorage.nom == "valentin") {
        app.updateExpCard(updateExperiencesValentin1);
        app.updateExpCard(updateExperiencesValentin2);
        app.updateExpCard(updateExperiencesValentin3);

        //app.updateSchoolCard(updateSchoolValentin1);
        //app.updateSchoolCard(updateSchoolValentin2);
    }
    else if (localStorage.nom == "nicolas") {
        app.updateExpCard(updateExperiencesNicolas1);
        app.updateExpCard(updateExperiencesNicolas2);
    }

})();