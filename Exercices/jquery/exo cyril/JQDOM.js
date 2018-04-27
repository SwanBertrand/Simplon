$(document).ready(function(){//charge le code contenu à l'intérieur quand la page est pleinement chargé, évite des erreurs potentielles
    
	$("#partieFonctionnelle").append('<button id="bt4">Bouton 4</button>');

	$("#li1").parentsUntil("body").css("border","3px dotted black");

    $("#bt1").on("click",function(){

    	$("#mesListes>ul").first().append("<p>Je suis tout seul</p>").children("li").remove();

    })

    $("#partieFonctionnelle button").eq(2).on("click",function(){

    	$("#duTexte").children().eq(1).after("<p>Uchronie</p>");
    	$("#partieFonctionnelle").children().eq(0).before("<p>Mes boutons</p>");

    })

    $("#bt2").on("click",function(){

    	$("ul").eq(1).children().not("#li8").css({
    		"background-color": "black",
    		"color": "white"
    	})

    })

    $("#bt4").on("click",function(){
    	$("#bt4").siblings().text("On a changé").off().on("click",function(){
    		$("ul").eq(1).append($("ul").eq(1).children("li").first());
    	})
    })

}); 
