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
      setInterval(function(){

         var counter = document.getElementById("counter");
         if (counter === undefined)  {
           document.getElementById("tree").className = "tree-1";
         } else if (counter.innerHTML < 15) {
           document.getElementById("tree").className = "tree-1";
         } else if (counter.innerHTML >= 15 && counter.innerHTML < 30) {
           document.getElementById("tree").className = "tree-2";
         } else if (counter.innerHTML >= 30 && counter.innerHTML < 45) {
           document.getElementById("tree").className = "tree-3";
         } else if (counter.innerHTML >= 45 && counter.innerHTML < 60) {
           document.getElementById("tree").className = "tree-4";
         } else if (counter.innerHTML >= 60 && counter.innerHTML < 75) {
           document.getElementById("tree").className = "tree-5";
         } else if (counter.innerHTML >= 75 && counter.innerHTML < 90) {
           document.getElementById("tree").className = "tree-6";
         } else if (counter.innerHTML > 90) {
           document.getElementById("tree").className = "tree-7";
         }
              controller.updatePage();
       }, 3000);
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
