function openStream(){
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => playVideo(stream, 'idVideo1'))
  .catch(err => console.log(err))
}

module.exports = openStream;
