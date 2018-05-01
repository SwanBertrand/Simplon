$(function(){

	$(document).on("mouseup", function(e){
		$(document).off("mousemove");

		var xMouse = e.pageX;
		var yMouse = e.pageY;
		var xStartDrop = $("#drop").offset().left;
		var xEndDrop = $("#drop").offset().left + $("#drop").width();
		var yStartDrop = $("#drop").offset().top;
		var yEndDrop = $("#drop").offset().top + $("#drop").height();

		console.log(xStartDrop + "," + xEndDrop + "," + yStartDrop + "," + yEndDrop);

		if (xMouse >= xStartDrop && xMouse <= xEndDrop && yMouse >= yStartDrop && yMouse <= yEndDrop){

			console.log("On drop bien !");
			$("#drag").fadeOut(500);
			$("#finish").removeClass().addClass("show");

		}

	})

	$("#drag").on("mousedown", function(e){

		var xMouse = e.pageX;
		var yMouse = e.pageY;
		var xDiv = $("#drag").offset().left;
		var yDiv = $("#drag").offset().top;
		var xDiff = xMouse - xDiv;
		var yDiff = yMouse - yDiv;

		$(document).on("mousemove",function(event){

			var X = event.pageX;
			var Y = event.pageY;

			$("#drag").offset({
				"left": X - xDiff,
				"top": Y - yDiff
			})

		});

	});

});