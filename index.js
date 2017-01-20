var hashTag = 'nil';
var running = false;

window.onload = function() {
  var updateTreeModel = new UpdateTreeModel();
  var updateTreeView = new UpdateTreeView();
  var controller = new Controller(updateTreeModel, updateTreeView);
  var msg = 0;



  $("#generate-forest").click(function(){
    var selection = $('#forest-selection').find(":selected").text();
    console.log(selection);
    $("#forest-type").text(`of ${selection}`);
    hashTag = `#${selection}`;
    console.log(hashTag);
  });

  bgAudio = new Audio('./public/media/bgAudio.mp3');
  bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  bgAudio.volume = 0.25;
  bgAudio.play();

};

if (hashTag === 'nil'){
  console.log("no tag set")
}
else {
  console.log("tag set")
  sendHashTag();
  running = true;
}

if (running === true){
  setInterval(function(){controller.updatePage();}, 3000);
}
