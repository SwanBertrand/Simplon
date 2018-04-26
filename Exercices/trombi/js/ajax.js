var trombiDiv = document.getElementById("trombiDiv");

$(trombiDiv.children).mouseover(function(){

	var monElement = $(this);

	$.get(
    '../php/script.php',        // Le fichier cible côté serveur.
    {id:monElement.attr("id")}, // Les données à envoyer.
    afficheNom,                 // Nous renseignons uniquement le nom de la fonction de retour.
    "json"						//Type de données qu'on espère reçevoir côté serveur
);

function afficheNom(result){
    console.log(result);
    console.log(result["name"]);

    var nameToDisplay = document.getElementById("nomPrenom");
    nameToDisplay.innerHTML = result["name"];

    var textToDisplay = document.getElementById("textePerso");
    textToDisplay.innerHTML = result["parcours"];

};


});