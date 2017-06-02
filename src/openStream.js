const playVideo = require('./playVideo');
const $ = require('jquery');
const Peer = require('simple-peer');
function openStream(){
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => {
    playVideo(stream, 'idVideo1')

    const p = new Peer({initiator: location.hash === '#1', trickle: false, stream});
    p.on('signal', token => {
      $('#txtMySignal').val(JSON.stringify(token));
    });

    $('#btnButton').click(()=>{
      const friendSignal = JSON.parse($('#txtFriendSignal').val());
      p.signal(friendSignal);
    });

    p.on('stream', friendStream => playVideo(friendStream, 'idVideo2'));
  })
  .catch(err => console.log(err))
}

module.exports = openStream;
