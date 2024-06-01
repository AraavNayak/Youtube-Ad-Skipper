var htmlVideoPlayer = document.getElementsByTagName('video')[0];
let duration = htmlVideoPlayer.duration;
htmlVideoPlayer.currentTime = duration;
htmlVideoPlayer.play();
var skipBtn = document.getElementsByClassName("ytp-skip-ad-button");
skipBtn[0].click();
