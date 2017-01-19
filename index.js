window.onload = function() {
 $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
};

$(document).ready(function(){
    $("#generate-forest").click(function(){
      var selection = $('#forest-selection').find(":selected").text();
      console.log()
        $("#forest-type").text(`of ${selection}`);
    });
});


bgAudio = new Audio('./public/media/bgAudio.mp3');
bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgAudio.volume = 0.25;
bgAudio.play();
