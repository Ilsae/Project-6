var videoStream = false;
function activateCam(){

    var video = document.querySelectorAll(".cameraViewport");

    if(!videoStream) {


        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, handleVideo, videoError);
        }

        function handleVideo(stream) {

            videoStream = window.URL.createObjectURL(stream)
            for (i = 0; i < video.length; ++i) {
                video[i].src = videoStream;
            }
        }

        function videoError(e) {

        }
    } else {
        for (i = 0; i < video.length; ++i) {
            video[i].src = videoStream;
        }
    }

}
