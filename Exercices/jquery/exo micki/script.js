$( document ).ready(function(){

	$("#bloc1").hover(function(){
		$("#bloc1").removeClass("vert").addClass("bleu");
	},function(){
		$("#bloc1").removeClass("bleu").addClass("vert");
	})

	$("#champ1").keyup(function(){
		var temp = $("#champ1").val();
		$("#para1").text(temp);
	})

	$(".bloc2").hover(function(){

        if ($.isNumeric($(this).text())){

            if ( ($(this).text()%2) == 0) {
                $(this).addClass("vert");
            }
            if ( ($(this).text()%2) != 0) {
                $(this).addClass("rouge");
            }
        }
        else{
            $(this).addClass("bleu");
        }
    },function(){
        $(this).attr("class", "bloc2");
    })

    $("#btn").on("click", function(){

    	var textToDisplay ="";

    	$(".bloc2").each(function(){

    		if ($.isNumeric($(this).text())){

	            if ( ($(this).text()%2) == 0) {
	               textToDisplay += $(this).text() + " = pair;\n";
	            }
	            if ( ($(this).text()%2) != 0) {
	               textToDisplay += $(this).text() + " = impair;\n";
	            }
	        }
	        else{
	            textToDisplay += $(this).text() + " = chaine de caractères;\n";
	        }
    	})

    	$("#result").text(textToDisplay);

    })

});