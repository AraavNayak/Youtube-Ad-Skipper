var htmlVideoPlayer = document.getElementsByTagName('video')[0];
let duration = htmlVideoPlayer.duration;
htmlVideoPlayer.currentTime = duration;
htmlVideoPlayer.play();
