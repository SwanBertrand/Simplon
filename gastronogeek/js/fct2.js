
function clickButton(){
  
  		
 		
 		if (confirm('Voulez-vous envoyer le commentaire ?')) {
			alert('Le commentaire est envoyé !');
			document.getElementById('Comment').innerHTML += ajout.value; //TEXT COMMENT

	  		document.getElementById('pseudo').innerHTML += ajout.value; //TEXT PSEUDO

	  		document.getElementById('fileupload').innerHTML += ajout.value; // PHOTO

			document.getElementById('Comment').value= ''; //on vide le champs commentaire

	  		document.getElementById('pseudo').value= ''; //on vide le champs pseudo

		}else{
			alert('Le commentaire est annulé.');
		};
}



window.addEventListener("load", function(event) { //On ajoute l'evenement de clique sur le bouton
	var valider = document.getElementById('valider');
	valider.addEventListener("click", clickButton);
});