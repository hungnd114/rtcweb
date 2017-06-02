function openCamera(){
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => {
    const video = document.getElementById('idVideo1');
    video.srcObject = stream;
    video.onloadmediadata = function(){
      video.play();
    }
  })
  .catch(err => console.log(err))
}

module.exports = openCamera;
