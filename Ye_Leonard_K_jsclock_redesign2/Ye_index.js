function getTime() {

	var currentTime = new Date();

	var hours = currentTime.getHours();

	var minutes = currentTime.getMinutes();

	var seconds = currentTime.getSeconds();

	var suffix = "AM";

	if (minutes < 10){
		minutes = "0" + minutes; // prevent 1:1:00 
	}

	if (seconds < 10){
		seconds = "0" + seconds; // prevent 1:01:1
	}

	if (hours >= 12){
		suffix = "PM";
		hours = hours - 12; // reset after AM
	}

	if (hours == 0){
	    hours = 12; // reset after 11:59
	}

	document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " " + suffix;

}	

function abc() {
	getTime();
	setInterval(getTime,1000);
}



