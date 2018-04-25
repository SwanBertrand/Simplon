window.addEventListener("load", function(event) {
	//lorsque l'evenement est déclenché je surveille / j'écoute les évenements de type click sur mon bouton dont l'id est "valid"
	// s'il y a un click je lance la fonction execute()
	contvalid.addEventListener("click", alerte);
});


function alerte(){
	alert("Formulaire envoyé");
};
