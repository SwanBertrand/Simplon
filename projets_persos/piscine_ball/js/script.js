(function(){

	//Récupération des éléments HTML
	var longueur = document.getElementById("longueurPiscine");
	var largeur = document.getElementById("largeurPiscine");
	var profondeur = document.getElementById("profondeurPiscine");
	var titleBall = document.getElementById("titleBall");
	var ball = document.getElementById("ball");
	var raz = document.getElementById("raz");
	var result = document.getElementById("result");

	//Déclaration des variables nécessaires aux calculs
	var volumePiscine;
	var volumePiscineReel;
	var diametreBalle;
	var rayonBalle;
	var volumeBalle;
	var nbBalle;
	var coteCube;
	var volumeCube;
	var nbCube;
	var volumeVide;
	var resultat;

	//Création de la focntion de remise à zero de la page
	function remiseAZero(){

		longueur.value = "";
		largeur.value = "";
		profondeur.value = "";
		result.value = "";
		ball.selectedIndex = "0";
		titleBall.textContent = " balles de tennis ";
	};

	//Création de la fonction du calcul du nombre de balles qui peuvent entrer dans une piscine
	function calculNbBalles(long, larg, prof ,type){

		//Récupération des caractériqtiques de la piscine et converstion en cm
		long = parseFloat(long)*100;
		larg = parseFloat(larg)*100;
		prof = parseFloat(prof)*100;

		console.log("Longueur : " + long + " cm");
		console.log("Largeur : " + larg + " cm");
		console.log("Profondeur : " + prof + " cm");

		//Calcul du volume de la piscine
		volumePiscine = long * larg * prof;
		console.log("Volume de la picine: " + volumePiscine + "cm3");

		//Récupération du type de balle selectionnnée
		type = ball.options[ball.selectedIndex].value;

			//Switch case dépendant du type de balle sélectionnée
			switch (type) {
				case "Balle de tennis":
					//Diamètre d'une balle de tennis en cm²
					diametreBalle = 6.5;
					//Mise à jour du texte du titre
					titleBall.textContent = " balles de tennis ";
					console.log("Diamètre de la balle: " + diametreBalle + "cm3");
					break;
				case "Ballon de footbal":
					//Diamètre d'un ballon de football en cm²
					diametreBalle = 22;
					//Mise à jour du texte du titre
					titleBall.textContent = " ballons de football ";
					console.log("Diamètre de la balle: " + diametreBalle + "cm3");
					break;
				case "Ballon de basket-ball":
					//Diamètre d'un ballon de basket-ball en cm²
					diametreBalle = 24.3;
					//Mise à jour du texte du titre
					titleBall.textContent = " ballons de basket-ball ";
					console.log("Diamètre de la balle: " + diametreBalle + "cm3");
					break;
				case "Ballon de volley-ball":
					//Diamètre d'un ballon de volley-ball cm²
					diametreBalle = 21;
					//Mise à jour du texte du titre
					titleBall.textContent = " ballons de volley-ball ";
					console.log("Diamètre de la balle: " + diametreBalle + "cm3");
					break;
				default:
					alert("Veuillez selectionner une balle");
					break;
			}

			//Calcul du rayon de la balle
			rayonBalle = diametreBalle/2;
			console.log("Rayon de la balle: " + rayonBalle + "cm");

			//Calcul du volume d'un cube ayant pour côté le diamètre de la balle
			coteCube = diametreBalle;
			volumeCube = Math.pow(coteCube, 3);
			console.log("Volume du cube: " + volumeCube + "cm3");

			//Calcul du volume de la balle
			volumeBalle = (4 * Math.PI / 3) * Math.pow(rayonBalle, 3);
			console.log("Volume de la balle: " + volumeBalle + "cm3");

			//Calcul de la différence de volume entre le cube et la balle
			volumeVide = volumeCube - volumeBalle;
			console.log("Volume vide: " + volumeVide + "cm3");

			//Calcul du nombre de cubes pouvant entrer dans la piscine
			nbCube = volumePiscine / volumeCube;
			console.log("Nombre de cubes: " + nbCube);

			//Calcul du volume réel disponible dans la piscine (en tenant compte de l'espace existant entre les balles)
			volumePiscineReel = volumePiscine - (nbCube * volumeVide);
			console.log("Volume réel de la piscine: " + volumePiscineReel + "cm3")

			//Calcul du nombre de balles pouvant entrer dans la piscine
			nbBalle = volumePiscineReel / volumeBalle;
			console.log(nbBalle);

			//On ne prend uniqument les balles pleines
			nbBalle = Math.trunc(nbBalle);
			console.log(nbBalle);

			//Affichage du résultat uniquement si les 3 champs de caractéristique de la piscine sont des nombres
			if(!isNaN(long) && !isNaN(larg) && !isNaN(prof)){
				result.value = nbBalle;
			}
			else{
				result.value = "";
			}

		};

	//Appel de la fonction de RAZ au chargement de la page
	remiseAZero();

	//Mise en place d'un écouteur sur le champ longueur lorsqu'une touche du clavier est relevée et qui lance la focntion de calcul
	longueur.addEventListener("keyup", function(e){calculNbBalles(longueur.value, largeur.value, profondeur.value, ball)});

	//Mise en place d'un écouteur sur le champ largeur lorsqu'une touche du clavier est relevée qui lance la focntion de calcul
	largeur.addEventListener("keyup", function(e){calculNbBalles(longueur.value, largeur.value, profondeur.value, ball)});

	//Mise en place d'un écouteur sur le champ profondeur lorsqu'une touche du clavier est relevée qui lance la focntion de calcul
	profondeur.addEventListener("keyup", function(e){calculNbBalles(longueur.value, largeur.value, profondeur.value, ball)});

	//Mise en place d'un écouteur sur le select lorsqu'une option est selectionnée qui lance la focntion de calcul
	ball.addEventListener("change", function(e){calculNbBalles(longueur.value, largeur.value, profondeur.value, ball)});

	//Mise en place d'un écouteur sur le bouton RAZ au clic qui lance la fonction de remise à zero
	raz.addEventListener("click", function(e){remiseAZero()});

})();