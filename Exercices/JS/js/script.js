alert("Bienvenue sur le site !");
var age = parseInt(prompt("Entrez votre âge :"));

switch (true) {
	case (age >= 1 && age <= 17):
		alert("Vous n'êtes pas encore majeur.");
		break;
	case (age >= 18 && age<=49):
		alert("Vous êtes majeur mais pas encore senior.");
		break;
	case (age >= 50 && age <= 59):
		alert("Vous êtes senior mais pas encore retraité.");
		break;
	case (age >= 60 && age <= 120):
		alert("Vous êtes retraité, profitez de votre temps libre!");
		break;
	default:
		alert("Vous n'avez pas entré un âge valide");
		break;
}

alert("Merci de nous avoir communiqué vos données personnelles :)");

var nb1 = 0;
var nb2 = 0;

nb1++;
console.log("nb1 vaut : " + nb1);
nb2 = nb1 +1;
console.log("nb2 vaut : " + nb2);
console.log("nb1 vaut : " + nb1);