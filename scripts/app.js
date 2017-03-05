(function() {
    'use strict';

    var app = {
        isLoading: true,
        visibleCards: {},
        selectedCities: [],
        spinner: document.querySelector('.loader'),
        cardTemplate: document.querySelector('.cardTemplate'),
        container: document.querySelector('.main'),
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
    app.updateExpCard = function(data) {
        var dataLastUpdated = new Date(data.created);
        var code = data.code
        var url = data.url;
        var description = data.description;
        var period = data.period;
        var name = data.name;
        var card = app.visibleCards[data.key];
        if (!card) {
            card = app.cardTemplate.cloneNode(true);
            card.classList.remove('cardTemplate');
            card.querySelector('.name').textContent = name;
            card.removeAttribute('hidden');
            app.container.appendChild(card);
            app.visibleCards[data.key] = card;
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
    app.getProject = function(key, label) {
        //var statement = 'select * from cv.project where woeid=' + key;
        //var url = 'put a url' + statement;
        // Fetch the latest data.
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
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
                app.updateExpCard(updateExperiences);
            }
        };
        request.open('GET', url);
        request.send();
    };
    // Iterate all of the cards and attempt to get the latest forecast data
    app.updateSkills = function() {
        var keys = Object.keys(app.visibleCards);
        keys.forEach(function(key) {
            app.getForecast(key);
        });
    };

    // TODO: récupérer des icônes sympas...
    app.getIconClass = function(expCode) {
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
    /*
     * Expérience
     */
    var updateExperiences = {
        key: '2459115',
        name: 'Apprenti développeur .NET',
        created: '2017-02-26T18:13:00Z',
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
        code: 1
    };
    // TODO uncomment line below to test app with fake data
    app.updateExpCard(updateExperiences);

    // TODO add startup code here
})();