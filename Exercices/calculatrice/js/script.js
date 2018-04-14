(function(){

	var nb1 = document.getElementById("nb1");
	var nb2 = document.getElementById("nb2");
	var operator = document.getElementById("operator");

	var resultat;
	var result = document.getElementById("result");

	function operation(a, b, operateur){

		a = parseInt(a);
		b = parseInt(b);
		operateur = operator.options[operator.selectedIndex].value;

			switch (operateur) {
				case "+":
					resultat = a + b
					break;
				case "-":
					resultat = a - b;
					break;
				case "x":
					resultat = a * b;
					break;
				case "/":
					resultat = a / b;
					break;
				default:
					// statements_def
					break;
			}

			result.value = resultat;

		};

	 nb1.addEventListener("keyup", function(e){operation(nb1.value, nb2.value, operator)});
	 nb2.addEventListener("keyup", function(e){operation(nb1.value, nb2.value, operator)});
	 operator.addEventListener("change", function(e){operation(nb1.value, nb2.value, operator)});

})();