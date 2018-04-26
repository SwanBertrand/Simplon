//-------------AFFICHER CACHER -------------------

$('#depart1').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	$("#violet").hide(1000);
	$("#violet").show(1000);

});

//-------------FONDU-------------------
$("#magie").hide();
$('#depart2').click(function(){
	jQuery.fx.off = false;
	
	//Inserez le code de votre animation ici !
	$("#magie").fadeIn(500).fadeOut(500);
	$("#jaune").fadeOut(1000);

	$("#orange").hover(function(){
		$("#orange").fadeToggle(1000);
	},function(){
		$("#orange").fadeToggle(1000);
	})
});

//-------------SLIDE-------------------

$('#depart3').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	$("#noir").slideUp(1000);

});

//Inserez le code de votre animation ici !
$("#gris").on("click",function(){
		$("#gris").slideUp(1000).slideDown(1000);
		$("#noir").slideDown(1000);
	})

	$("#marron").hover(function(){
		$("#marron").slideToggle(1000);
	},function(){
		$("#marron").slideToggle(1000);
	})

//-------------ANIMATE-------------------

$('#depart4').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	$("#vert").animate({
		height: "200px",
		width: "200px"
	}, 1000);
});

//-------------DELAI DESACTIVER------------

$('#depart5').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	$("#pink").delay(2000).animate({
		height: "200px",
		width: "200px"
	}, 1000);
});

$('#desactiver').click(function(){
	jQuery.fx.off = true;
	//Inserez le code de votre animation ici !
});

$('.reload').click(function(){
	location.reload();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('#navBar').slideDown('slow');
  } else {
    $('#navBar').slideUp('slow');
  }
  prevScrollpos = currentScrollPos;
} 

