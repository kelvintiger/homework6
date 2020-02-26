var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {

	video.play();
	document.getElementById("volume").innerHTML = video.volume/0.01 + "%";
	console.log("Play Video");
} 

function pauseVid() { 

	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 

	video.playbackRate = (video.playbackRate * 0.8);
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = (video.playbackRate * 1.25);
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {

	if (video.currentTime < 535.8){
		video.currentTime = (video.currentTime + 60);
	} else {
		video.currentTime = 0;
		video.playbackRate = 1;
	}

	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  
  if(video.muted == false){
  		video.muted = true;
  		document.getElementById("mute").innerHTML = "Unmute";
  		console.log("Muted");
  	} else {
  		video.muted = false;
  		document.getElementById("mute").innerHTML = "Mute";
  		console.log("Unmuted");
  	}
}

function changeVolume() {

	var v = document.getElementById("volumeSlider").value;

	video.volume = (v*0.01);
	document.getElementById("volume").innerHTML = v + "%";

	console.log("Volume is "+ video.volume);

}
       

function gray() { 

	// video.style.filter = "grayscale(100%)";
	document.getElementById("myVideo").classList.add("grayscale");
	console.log("In grayscale");
}

function color() {

	// video.style.filter = "grayscale(0%)";
	document.getElementById("myVideo").classList.remove("grayscale");
	console.log("In color"); 
}
