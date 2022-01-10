// DECLEARATIONS
const socket = io('/');
const chatInputBox = document.getElementById('chat_message');
const all_messages = document.getElementById('all_messages');
const leave_meeting = document.getElementById('leave-meeting');
const main_chatwindow = document.getElementById('mainchat_window');
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
var m, imd;

// PEERJS CONFIG
let myVideoStream;
let currentUserIn;
let pendingMsg = 0;

var myPeer = new Peer({
  host: 'peerjs-server.herokuapp.com',
  secure: true,
  port: 443,
});

myVideo.muted = true;
var peers = new Map();

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

    myPeer.on('call', (call) => {
      console.log('hehehehe');
      call.answer(stream);
      const video = document.createElement('video');

      call.on('stream', (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    socket.on('user-connected', (userId) => {
      console.log('yo');
      setTimeout(() => {
        // user joined
        connectToNewUser(userId, myVideoStream);
      }, 1000);
    });

    socket.on('user-disconnected', (userId) => {
      peers.get(userId).close();
      //  if (peers[userId]) peers[userId].close();
    });
  });

myPeer.on('open', (id) => {
  imd = id;
  socket.emit('join-room', ROOM_ID, id);
});

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = document.createElement('video');
  call.on('stream', (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
  call.on('close', () => {
    video.remove();
  });

  peers.set(userId, call);
  // console.log(peers.get(userId));
}

function addVideoStream(video, stream) {
  video.srcObject = stream;

  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
  videoGrid.append(video);
}

document.addEventListener('keydown', (e) => {
  m = chatInputBox.value;
  if (e.which === 13 && m != '') {
    // console.log("msg sent");

    socket.emit('sentmessage', {
      msg: m,
      // user: currentUserId,
    });
    chatInputBox.value = '';
  }
});

// var el = document.getElementById("sendMsg");
// if(el){
// 	el.addEventListener("keydown", (e) => {
//       if (chatInputBox.value != "") {
//         socket.emit("message", {
//         	msg:chatInputBox.value,
//         	user: currentUserId,
//         });
//         chatInputBox.value = "";
//       }
//     });
// }

// chatInputBox.addEventListener("focus", () => {
// 	if(document.getElementById("chat__Btn")){
//    		document.getElementById("chat_Btn".classList.remove("has_new"));
// 		pendingMsg = 0;
//    		document.getElementById("chat__Btn").children[1].innerHTML='Chat';
//    	}
//   });

const playStop = () => {
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo();
  } else {
    setStopVideo();
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
};

const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    // console.log("was on");
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
};

const showInvitePopup = () => {
  document.body.classList.add('showInvite');
  document.getElementById('roomLink').value = window.location.href;
};

const hideInvitePopup = () => {
  document.body.classList.remove('showInvite');
};

const copyToClipboard = () => {
  /* Get The Text Field */
  var copyText = document.getElementById('roomLink');

  /* Select The Text Feild */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For Mobile Devices */

  /* Copy the Text Inside The Text Field */
  document.execCommand('copy');

  /*Alert The Copied Text */
  alert('Copied: ' + copyText.value);

  hideInvitePopup();
};

const setPlayVideo = () => {
  const html = `<i class="unmute fa fa-pause-circle"></i>
  <span class="unmute">Resume Video</span>`;
  document.getElementById('playPauseVideo').innerHTML = html;
};

const setStopVideo = () => {
  const html = `<i class=" fa fa-video-camera"></i>
  <span class="">Pause Video</span>`;
  document.getElementById('playPauseVideo').innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `<i class="unmute fa fa-microphone-slash"></i>
  <span class="unmute">Unmute</span>`;
  document.getElementById('muteButton').innerHTML = html;
};
const setMuteButton = () => {
  const html = `<i class="fa fa-microphone"></i>
  <span>Mute</span>`;
  document.getElementById('muteButton').innerHTML = html;
};
const endcall = () => {
  console.log('end call');
  myPeer.destroy();
  window.location.href = 'http://localhost:3000';
  //  handlePeerDisconnect();
  console.log('ended');
};
