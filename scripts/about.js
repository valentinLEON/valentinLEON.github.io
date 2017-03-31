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

if (sessionStorage.nom != null) {
    if (sessionStorage.nom == "valentin") {
        var jsonparsed = $.parseJSON(jsonValentin);
        $("#avatar").attr("src", jsonparsed.logo);
        $("#description").append(jsonparsed.description);
        $("#githubLink").attr("href", "http://github.com/valentinLEON").append(jsonparsed.nom);
    } else if (sessionStorage.nom == "nicolas") {
        var jsonparsed = $.parseJSON(jsonNicolas);
        $("#avatar").attr("src", jsonparsed.logo);
        $("#description").append(jsonparsed.description);
        $("#githubLink").attr("href", "http://github.com/nicolasOrlandini").append(jsonparsed.nom);
    }
}