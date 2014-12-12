var video = document.querySelectorAll(".cameraViewport");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
	for (i = 0; i < video.length; ++i) {
		video[i].src = window.URL.createObjectURL(stream);
	}
}
 
function videoError(e) {
    // do something
}