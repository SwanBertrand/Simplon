var text = document.getElementById("text").innerHTML;
var bouton = document.getElementById("bouton");

bouton.addEventListener("click", function(){

	var filtrea = /[àáâãäå]/g;
	var filtreA = /[ÀÁÂ]/g;
	var filtree = /[èéêë]/g;
	var filtreE = /[ÈÉÊË]/g;

	text = text.replace(filtrea, "a");
	text = text.replace(filtreA, "A");
	text = text.replace(filtree, "e");
	text = text.replace(filtreE, "E");

	console.log(text);

	document.getElementById("text").innerHTML = text;

});