$(function(){
	$(".navbar a, footer a").on("click",function(event){
		event.preventDefault();
		var hash = this.hash;

		$('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
	});

	$(window).on('scroll', function() {
    	$('#background').css('margin-top', $(window).scrollTop() * -.3);
    });

	$("#resolve_button").hover(function(){
		$("#steps_menu").slideDown(300);
	}, function(){
		$("#steps_menu").slideUp(300);
	});

})