function playVideo(stream, idVideo){
  const video = document.getElementById(idVideo);
  video.srcObject = stream;
  video.onloadmediadata = function(){
    video.play();
  }
}

module.exports = playVideo;
