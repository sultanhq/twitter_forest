window.onload = function() {
 $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
};

bgAudio = new Audio('./public/media/bgAudio.mp3');
bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgAudio.volume = 0.25;
bgAudio.play();
