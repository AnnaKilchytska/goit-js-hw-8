const throttle = require('lodash.throttle');

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const CURRENT_PLAYTIME = "videoplayer-current-time";
    
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

function onLoadPageVideoSetTime() {
    let seconds = localStorage.getItem(CURRENT_PLAYTIME);
    player.setCurrentTime(seconds).then(function(seconds) {   
    }).catch(function(error) {
        console.log(error);
    });
}


window.addEventListener("load", onLoadPageVideoSetTime);

   
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
    console.log(e.seconds);
    localStorage.setItem(CURRENT_PLAYTIME, JSON.stringify(e.seconds));
}




    