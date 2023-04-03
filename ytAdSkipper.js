var htmlVideoPlayer = document.getElementsByTagName('video')[0];
let duration = htmlVideoPlayer.duration;
htmlVideoPlayer.currentTime = duration;
htmlVideoPlayer.play();
var skipBtn = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
skipBtn[0].click();
