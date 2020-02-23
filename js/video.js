var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {

	video.play();
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

	if (video.currentTime < 535){
		video.currentTime = (video.currentTime + 60);
	} else {
		video.currentTime = 0;
		video.playbackRate = 0;
	}

	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  
  if(video.muted == false){
  		video.muted = true;
  		console.log("Muted");
  	} else {
  		video.muted = false;
  		console.log("Unmuted");
  	}
}

function changeVolume() {

	var v = document.getElementById("volumeSlider").value;

	video.volume = (v*0.01);
	console.log("Volume is "+ video.volume);
}
       

function gray() { 

	video.style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {

	video.style.filter = "grayscale(0%)";
	console.log("In color"); 
}
