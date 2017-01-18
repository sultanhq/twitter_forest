window.onload = function() {
  var updateTreeModel = new UpdateTreeModel();
  var updateTreeView = new UpdateTreeView();
  var controller = new Controller(updateTreeModel, updateTreeView);


 // $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
 setInterval(function(){controller.updatePage();}, 3000);

// $(document).ready(function(){
    $("#generate-forest").click(function(){
      var selection = $('#forest-selection').find(":selected").text();
      console.log()
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
