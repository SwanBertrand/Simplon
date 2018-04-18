$(function(){
	$(".navbar a, footer a").on("click",function(event){
		event.preventDefault();
		var hash = this.hash;

		$('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
	});

	$(window).on('scroll', function() {
    	$('#background').css('margin-top', $(window).scrollTop() * -.3);
    });

	if ( window.addEventListener ) {
		var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
		window.addEventListener("keydown", function(e){
			kkeys.push( e.keyCode );
			if ( kkeys.toString().indexOf( konami ) >= 0 ) {
				var corps = document.getElementById("about");
				baliseAudio = document.createElement("audio");
				baliseAudio.setAttribute("id", "secret");
				baliseAudio.setAttribute("src", "sound/secret.mp3");
				baliseAudio.setAttribute("type", "audio/mpeg");
				baliseImage = document.createElement("img");
				baliseImage.setAttribute("id", "gif");
				baliseImage.setAttribute("src", "img/secret.gif");
				baliseImage.setAttribute("style", "position: fixed; height: 20%; width: 10%; left: 45%; top: 40%; z-index: 200;");
				corps.appendChild(baliseAudio);
				corps.appendChild(baliseImage);
				var toPlay = document.getElementById("secret");
				toPlay.play();
				setTimeout(function(){
					corps.removeChild(baliseAudio);
					corps.removeChild(baliseImage);
					kkeys = [];
				}, 3000)			
			}else if (konami.indexOf(e.keyCode) === false){
				kkeys = [];
			}

		}, true);
	}

})