(function() {
    'use strict';

    var exp = {
        isLoading: true,
        visibleCards: {},
        selectedCities: [],
        spinner: document.querySelector('.loader'),
        cardTemplate: document.querySelector('.cardTemplate'),
        container: document.querySelector('#test5'),
        addDialog: document.querySelector('.dialog-container')
    };


    /*****************************************************************************
     *
     * Event listeners for UI elements
     *
     ****************************************************************************/

    // document.getElementById('butRefresh').addEventListener('click', function() {
    //     // Refresh all of the forecasts
    //     app.updateForecasts();
    // });

    /*****************************************************************************
     *
     * Methods to update/refresh the UI
     *
     ****************************************************************************/
    exp.updateExpCard = function(data) {
        var dataLastUpdated = new Date(data.created);
        var code = data.code
        var description = data.description;
        var period = data.period;
        var name = data.name;
        var card = exp.visibleCards[data.key];
        var color = data.color;
        if (!card) {
            console.log(card);
            card = exp.cardTemplate.cloneNode(true);
            card.classList.remove('cardTemplate');
            card.querySelector('.name').textContent = name;
            card.removeAttribute('hidden');
            //card.find(".card-content").addClass(color);
            exp.container.appendChild(card);
            exp.visibleCards[data.key] = card;
        }
        // Verifies the data provide is newer than what's already visible
        // on the card, if it's not bail, if it is, continue and update the
        // time saved in the card
        var cardLastUpdatedElem = card.querySelector('.card-last-updated');
        var cardLastUpdated = cardLastUpdatedElem.textContent;
        if (cardLastUpdated) {
            cardLastUpdated = new Date(cardLastUpdated);
            // Bail if the card has more recent data then the data
            if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {
                return;
            }
        }
        cardLastUpdatedElem.textContent = data.created;
        card.querySelector('.description').textContent = description;
        card.querySelector('.period').textContent = period;
        // pour ajouter une icône
        //card.querySelector('.fa').classList.add(app.getIconClass(code));
        if (exp.isLoading) {
            exp.spinner.setAttribute('hidden', true);
            exp.container.removeAttribute('hidden');
            exp.isLoading = false;
        }
    };
    /*****************************************************************************
     *
     * Methods for dealing with the model
     *
     ****************************************************************************/
    exp.getProject = function(key, label) {
        //Fetch the latest data.
        // var request = new XMLHttpRequest();
        // request.onreadystatechange = function() {
        //     if (request.readyState === XMLHttpRequest.DONE) {
        //         if (request.status === 200) {
        //             var response = JSON.parse(request.response);
        //             var results = response.query.results;
        //             results.key = key;
        //             results.label = label;
        //             results.created = response.query.created;
        //             exp.updateExpCard(results);
        //         }
        //     } else {
        //         exp.updateExpCard(updateExperiences);
        //     }
        // };
        request.open('GET', url);
        request.send();
    };
    // Iterate all of the cards and attempt to get the latest forecast data
    exp.updateSkills = function() {
        var keys = Object.keys(exp.visibleCards);
        keys.forEach(function(key) {
            exp.getForecast(key);
        });
    };

    // TODO: récupérer des icônes sympas...
    exp.getIconClass = function(expCode) {
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
    /* Expériences */
    var dbNico = {
        card1: {
            card_title: "Stage Configuration commutateurs et bornes wifi",
            card_content: "Métropôle Nice Côte d'Azur",
            period: "Mai 2015 – Juil. 2015",
            color: "cyan"
        },
        card2: {
            card_title: "Aide Electricien",
            card_content: "Electric' Antennes-Azur technisat",
            period: "Aout 2013 – Sept. 2013",
            color: "deep-orange"
        }
    };
    var updateExperiences = {
        key: '2459115', //2459115
        name: 'Apprenti développeur .NET',
        created: '2017-02-26T18:13:00Z',
        description: "InnovationCRM",
        period: "En cours.",
        code: 1
    };
    var updateExperiences1 = {
        key: '2459116',
        name: 'Stage développeur Web',
        created: '2017-02-27T18:13:00Z',
        description: "Aigle Communication",
        period: "Déc. 2015 - Juin 2016",
        code: 1
    };
    var updateExperiences2 = {
        key: '2459117',
        name: 'Apprenti développeur .NET',
        created: '2017-02-28T18:13:00Z',
        description: "Exolink",
        period: "Avril 2015 - Nov. 2016",
        code: 1
    };
    // TODO uncomment line below to test app with fake data
    exp.updateExpCard(updateExperiences);
    exp.updateExpCard(updateExperiences1);
    exp.updateExpCard(updateExperience2);
})();