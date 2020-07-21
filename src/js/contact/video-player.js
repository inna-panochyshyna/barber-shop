export function videoPlayer() {
	const videoPlayer = document.getElementById("videoPlayer");
	const rewindBtn =  document.getElementById("videoRewind");
	const playBtn = document.getElementById("videoPlay");
	const stopBtn = document.getElementById("videoStop");
	const forwardBtn = document.getElementById("videoForward");
	const positionBar = document.getElementById("positionBar");
	const displayStatus = document.getElementById("displayStatus");
	const displayDuration = document.getElementById("displayDuration");

	const sHour = 3600;
	const sMinute = 60;

	function rewindVideo() {
		if(videoPlayer.currentTime <= 5) {
			stopVideo();
		} else {
			videoPlayer.currentTime -= 5;
		}
		
	};
	
	function playVideo() {
		if(videoPlayer.paused) {
			videoPlayer.play();
			playBtn.children[0].src = playBtn.children[0].src.replace("play.png", "pause.png");
			playBtn.children[1].innerHTML = "Pause";
		} else {
			videoPlayer.pause();
			playBtn.children[0].src = playBtn.children[0].src.replace("pause.png", "play.png");
			playBtn.children[1].innerHTML = "Play";
		};
	};
	
	function stopVideo() {
		videoPlayer.pause();
		videoPlayer.currentTime = 0;
		playBtn.children[0].src = playBtn.children[0].src.replace("pause.png", "play.png");
		playBtn.children[1].innerHTML = "Play";
	};
	
	function forwardVideo() {
		if(videoPlayer.currentTime >= videoPlayer.duration - 5) {
			stopVideo();
		} else {
			videoPlayer.currentTime += 5;
		}
	};
	
	function progressUpdate() {
		let currentTime = Math.round(videoPlayer.currentTime);
		displayDuration.innerHTML = formatSeconds(videoPlayer.duration);
		positionBar.style.width = (videoPlayer.currentTime / videoPlayer.duration * 100)  + "%";
		displayStatus.innerHTML = formatSeconds(currentTime)  + " /";
	};

	function formatSeconds(time) {
		if(time < 3600) {
			let minutes = Math.floor(time / sMinute);
			let seconds = Math.round((time - minutes * sMinute));
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			return `${minutes}:${seconds}`;	
		} else {
			let hours = Math.floor(time / sHour);
			let minutes = Math.round((time - hours * sHour) / sMinute);
			let seconds = Math.round((time - hours * msHour - minutes * sMinute));
			hours = hours < 10 ? '0' + hours : hours;
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			return `${hours}:${minutes}:${seconds}`;
		}
	};

	rewindBtn.addEventListener('click', rewindVideo);
	playBtn.addEventListener('click', playVideo);
	stopBtn.addEventListener('click', stopVideo);
	forwardBtn.addEventListener('click', forwardVideo);
	videoPlayer.addEventListener('timeupdate', progressUpdate);
}