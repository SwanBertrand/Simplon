$(function(){
    
	$("#faq h3").on("click",function(){

		$(this).toggleClass("ui-state-active").siblings("h3").removeClass();
		$(this).next("div").slideToggle().siblings("div").slideUp();;

	})

});