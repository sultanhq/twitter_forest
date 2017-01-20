var hashTag = 'nil';
var running = false;

window.onload = function() {
  var updateTreeModel = new UpdateTreeModel();
  var updateTreeView = new UpdateTreeView();
  var controller = new Controller(updateTreeModel, updateTreeView);
  var msg = 0;

  $("#Reset").click(function(){
    console.log("reset");
    sendReset();
  });

  $("#generate-forest").click(function(){
    var selection = $('#forest-selection').find(":selected").text();
    window.hashTag = selection;
    console.log(selection);
    $("#forest-type").text(`of ${selection}`);
    hashTag = `#${selection}`;
    console.log(hashTag);

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
  });

  bgAudio = new Audio('./public/media/bgAudio.mp3');
  bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  bgAudio.volume = 0.25;
  bgAudio.play();

};
