window.onload = function() {
  var updateTreeModel = new UpdateTreeModel();
  var updateTreeView = new UpdateTreeView();
  var controller = new Controller(updateTreeModel, updateTreeView);


 // $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
 setInterval(function(){
  controller.updatePage();
    var counter = document.getElementById("counter");
    if (counter.innerHTML < 15) {
      document.getElementById("tree").innerHTML = "<img style='height: 5vh;' src='./assets/images/t1.png'></img>";
    } else if (counter.innerHTML >= 15 && counter.innerHTML < 30) {
      document.getElementById("tree").innerHTML = "<img style='height: 10vh;' src='./assets/images/t2.png'></img>";
    } else if (counter.innerHTML >= 30 && counter.innerHTML < 45) {
      document.getElementById("tree").innerHTML = "<img style='height: 18vh;' src='./assets/images/t3.png'></img>";
    } else if (counter.innerHTML >= 45 && counter.innerHTML < 60) {
      document.getElementById("tree").innerHTML = "<img style='height: 40vh;' src='./assets/images/t4.png'></img>";
    } else if (counter.innerHTML >= 60 && counter.innerHTML < 75) {
      document.getElementById("tree").innerHTML = "<img style='height: 60vh;' src='./assets/images/t5.png'></img>";
    } else if (counter.innerHTML >= 75 && counter.innerHTML < 90) {
      document.getElementById("tree").innerHTML = "<img style='height: 80vh;' src='./assets/images/t7.png'></img>";
    } else {
      document.getElementById("tree").innerHTML = "<img style='height: 90vh;' src='./assets/images/t7.png'></img>";
    }

  }, 3000);

// $(document).ready(function(){
    $("#generate-forest").click(function(){
      var selection = $('#forest-selection').find(":selected").text();
        $("#forest-type").text(`of ${selection}`);
    });
// });


bgAudio = new Audio('./public/media/bgAudio.mp3');
bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgAudio.volume = 0.25;
bgAudio.play();
};
