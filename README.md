# Youtube-Ad-Skipper

Ever wanted to skip an ad before the skip button? Alternatively, have you ever wanted to rewatch an ad?

This is a program developed using Javascript to skip or replay Youtube ads. 
<br>
To use this program, paste the code from <code>ytAdSkipper.js</code> or <code>ytAdReplayer.js</code> into your browser's JS console and hit enter

<b><h2>Update:</h2></b>
For ease of skipping ads, can now use as a bookmarklet.
Instructions:
- save a bookmark on web browser
- in place of the bookmark's link, paste:
  <code>javascript:(function() { var htmlVideoPlayer = document.getElementsByTagName('video')[0]; let duration = htmlVideoPlayer.duration; htmlVideoPlayer.currentTime = duration; htmlVideoPlayer.play(); var skipBtn = document.getElementsByClassName("ytp-skip-ad-button"); })();</code>
- each time Youtube ad pops up, simply click on the bookmark to skip the ad
