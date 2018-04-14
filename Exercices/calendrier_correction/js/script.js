// je créé une fonction qui me permet de récupérer le nombre de jour du mois
// elle renvoi un entier
// debut fonction lastDayOfTheMonth

function lastDayOftheMonth(month){
			switch (month) {
				case "Janvier":
				case "Mars":
				case "Mai":
				case "Juillet":
				case "Août":
				case "Octobre":
				case "Décembre":
					return 31;
					break;
				case "Avril":
				case "Juin":
				case "Septembre":
				case "Novembre":
					return 30;
					break;
				case "Février":
					return 28;
					break;
				default:
					return -1;
					break;
			}
};

// fin fonction lastDayOfTheMonth

//Je créé une fonction qui génère un tableau 
// Prend 2 arguments : éléments dans lequel insérer le tableau, et une date
// debut fonction generateTable
function generateTable(target, date){


	// J'efface le contenu de l'élément donné en argument
	var targetToClear = document.getElementById(target);
	while (targetToClear.firstChild) {
    	targetToClear.removeChild(targetToClear.firstChild);
	}
	// je créé mon tableau / ma balise table
	var tableau = document.createElement("table");
	// j'attache ma balise au html
	masection.appendChild(tableau);
	// j'initialise mes autres variables
	var JourSemaine = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
	var mois = ["Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août","Septembre", "Octobre", "Novembre", "Décembre"];
	var masection = document.getElementById("masection");
	var nbJoursDansMois;
	//j'initialise ma première ligne tr ainsi que mes premières cellules de type th
	var premiereLigne = document.createElement("tr");
	var head = document.createElement("th");
	// je rajoute un colspan sur ma cellule pour prendre la taille nécéssaire
	head.colSpan = "7";
	// j'attache ma/Mes première(s) cellule(s) à ma première ligne
	premiereLigne.appendChild(head);
	tableau.appendChild(premiereLigne);
	// Ma seconde ligne affichera les noms des jours de la semaine

	// je créé une nouvelle ligne tr
	var secondeLigne = document.createElement("tr");
	// pour chaque jour dans mon tableau JourSemaine je créé une cellule que je rempli avec un nom de jour de semaine et je l'attache à ma ligne
	// debut for
	for (var i = 0; i < JourSemaine.length; i++) {
		var cellJours = document.createElement("td").appendChild(document.createTextNode(JourSemaine[i]));
		secondeLigne.appendChild(cellJours);
	}
	// fin for
	// J'attache ma ligne au tableau 
	// j'ai maintenant 2 lignes
	tableau.appendChild(secondeLigne);
	// J'ai besoin de connaitre quel jour tombe le premier du mois
	// je créé une variable de type date pour ce jour particulier
	var premierJour = new Date();
	// je créé une variable de décallage pour caller des cellules vides
	var offsetJour;
	// Je créé une nouvelle ligne
	var troisiemeLigne = document.createElement("tr");
	// je créé autant de cellule vide que mon décallage, que j'attache à ma ligne
	// debut for
	for (var i = 0; i < offsetJour; i++) {
		var cellNumero = document.createElement("td");
		troisiemeLigne.appendChild(cellNumero);
	}
	// fin for
	// ma ligne n'est pas complétement remplie

	// j'initialise une variable me permettant de savoir quand attacher ma ligne au tableau
	var ligneRemplie;
	// pour une variable allant de 1 à nombre de jour du mois
	// Je créé une cellule dans laquelle je met la valeur de ma variable allant de 1 à nombre de jours
	// debut for
		// j'attache ma cellule à ma ligne

		// j'incrémente ma variable de décallage

		// si ma ma variable de décallage est égale à 7 
			// j'attache ma ligne à mon tableau
			// je créé une nouvelle ligne 
			// je réinitialise à 0 ma variable de décallage
	// fin for
// fin fonction generateTable
};
//J'appelle ma fonction qui génère mon tableau
generateTable("masection", date);