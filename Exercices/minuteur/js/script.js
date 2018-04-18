var min = document.getElementById("min");
var sec = document.getElementById("sec");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var minToSet = document.getElementById("minToSet");
var secToSet = document.getElementById("secToSet");
var set = document.getElementById("set");
var timer;
var timestamp;
var go;
var toggle = 0;

function setTimer(minutes, secondes, interval){

	toggle = 0;
	clearInterval(interval);

	timer = new Date();
	timer.setMinutes(parseInt(minutes));
	timer.setSeconds(parseInt(secondes));
	timestamp = timer.getTime();

	if(timer.getMinutes() < 10){
		console.log("nb minutes = " + timer.getMinutes());
		min.innerHTML = "0"+timer.getMinutes();

	}
	else{
		console.log("nb minutes = " + timer.getMinutes());
		min.innerHTML = timer.getMinutes();
	}
	if(timer.getSeconds() < 10){
		console.log("nb secondes = " + timer.getSeconds());
		sec.innerHTML = "0"+timer.getSeconds();

	}
	else{
		console.log("nb secondes = " + timer.getSeconds());
		sec.innerHTML = timer.getSeconds();
	}

	console.log(timer);
}

function remiseAZero(minutes, secondes, interval){

	toggle = 0;
	clearInterval(interval);

	timer = new Date();
	timer.setMinutes(minutes);
	timer.setSeconds(secondes);
	timestamp = timer.getTime();
	console.log(timer);

	if(timer.getMinutes() < 10){

		min.innerHTML = "0"+timer.getMinutes();

	}
	else{
		min.innerHTML = timer.getMinutes();
	}
	if(timer.getSeconds() < 10){

		sec.innerHTML = "0"+timer.getSeconds();

	}
	else{
		sec.innerHTML = timer.getSeconds();
	}
	
};

function decrementage(interval){

	if(timer.getMinutes() == 0 && timer.getSeconds() == 0){
		toggle = 0;
		clearInterval(interval);
	}

	timestamp -= 1000;
	timer.setTime(timestamp);
	console.log(timer);
	if(timer.getMinutes() < 10){

		min.innerHTML = "0"+timer.getMinutes();

	}
	else{
		min.innerHTML = timer.getMinutes();
	}

	if(timer.getSeconds() < 10){

		sec.innerHTML = "0"+timer.getSeconds();

	}
	else{
		sec.innerHTML = timer.getSeconds();
	}
}

function init(interval){

	remiseAZero(00, 00, interval)

}

init(go);

start.addEventListener("click", function(e){
	if(toggle == 0){
		toggle = 1;
		go = setInterval(decrementage, 1000);

	}
	else{
		toggle = 0;
		clearInterval(go);
	}
});
set.addEventListener("click", function(e){
	setTimer(minToSet.value, secToSet.value, go);
});
reset.addEventListener("click", function(e){
	remiseAZero("00", "00", go);
});