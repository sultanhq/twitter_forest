var hashTag = 'nil';
var running = false;

window.onload = function() {
  var updateTreeModel = new UpdateTreeModel();
  var updateTreeView = new UpdateTreeView();
  var controller = new Controller(updateTreeModel, updateTreeView);
  var msg = 0;

  $("#Reset").click(function() {
    console.log("reset");
    sendReset();
  });

  $("#generate-forest").click(function() {
    var selection = $('#forest-selection').find(":selected").text();
    window.hashTag = selection;
    console.log(selection);
    $("#forest-type").text(`of ${selection}`);
    hashTag = `#${selection}`;
    console.log(hashTag);

    if (hashTag === 'nil') {
      console.log("no tag set");
    } else {
      console.log("tag set");
      sendHashTag();
      running = true;
    }


    if (running === true) {
      setInterval(function() {
        controller.updatePage();
        var counter = document.getElementById("counter");
        if (counter.innerHTML < 15) {
          document.getElementById("tree").className = "tree-1";
          document.getElementById("tree-2").className = "tree-1";
          document.getElementById("tree-3").className = "tree-1";
          document.getElementById("tree-4").className = "tree-1";
          document.getElementById("tree-5").className = "tree-1";
          document.getElementById("tree-6").className = "tree-1";
          document.getElementById("tree-7").className = "tree-1";
          document.getElementById("tree-8").className = "tree-1";
          document.getElementById("tree-9").className = "tree-1";
          document.getElementById("tree-10").className = "tree-1";
          document.getElementById("tree-11").className = "tree-1";
        } else if (counter.innerHTML >= 15 && counter.innerHTML < 30) {
          document.getElementById("tree").className = "tree-2";
          document.getElementById("tree-2").className = "tree-2";
          document.getElementById("tree-3").className = "tree-2";
          document.getElementById("tree-4").className = "tree-2";
          document.getElementById("tree-5").className = "tree-2";
          document.getElementById("tree-6").className = "tree-2";
          document.getElementById("tree-7").className = "tree-2";
          document.getElementById("tree-8").className = "tree-2";
          document.getElementById("tree-9").className = "tree-2";
          document.getElementById("tree-10").className = "tree-2";
          document.getElementById("tree-11").className = "tree-2";
        } else if (counter.innerHTML >= 30 && counter.innerHTML < 45) {
          document.getElementById("tree").className = "tree-3";
          document.getElementById("tree-2").className = "tree-3";
          document.getElementById("tree-3").className = "tree-3";
          document.getElementById("tree-4").className = "tree-3";
          document.getElementById("tree-5").className = "tree-3";
          document.getElementById("tree-6").className = "tree-3";
          document.getElementById("tree-7").className = "tree-3";
          document.getElementById("tree-8").className = "tree-3";
          document.getElementById("tree-9").className = "tree-3";
          document.getElementById("tree-10").className = "tree-3";
          document.getElementById("tree-11").className = "tree-3";
        } else if (counter.innerHTML >= 45 && counter.innerHTML < 60) {
          document.getElementById("tree").className = "tree-4";
          document.getElementById("tree-2").className = "tree-4";
          document.getElementById("tree-3").className = "tree-4";
          document.getElementById("tree-4").className = "tree-4";
          document.getElementById("tree-5").className = "tree-4";
          document.getElementById("tree-6").className = "tree-4";
          document.getElementById("tree-7").className = "tree-4";
          document.getElementById("tree-8").className = "tree-4";
          document.getElementById("tree-9").className = "tree-4";
          document.getElementById("tree-10").className = "tree-4";
          document.getElementById("tree-11").className = "tree-4";
        } else if (counter.innerHTML >= 60 && counter.innerHTML < 75) {
          document.getElementById("tree").className = "tree-5";
          document.getElementById("tree-2").className = "tree-5";
          document.getElementById("tree-3").className = "tree-5";
          document.getElementById("tree-4").className = "tree-5";
          document.getElementById("tree-5").className = "tree-5";
          document.getElementById("tree-6").className = "tree-5";
          document.getElementById("tree-7").className = "tree-5";
          document.getElementById("tree-8").className = "tree-5";
          document.getElementById("tree-9").className = "tree-5";
          document.getElementById("tree-10").className = "tree-5";
          document.getElementById("tree-11").className = "tree-5";
        } else if (counter.innerHTML >= 75 && counter.innerHTML < 90) {
          document.getElementById("tree").className = "tree-6";
          document.getElementById("tree-2").className = "tree-6";
          document.getElementById("tree-3").className = "tree-6";
          document.getElementById("tree-4").className = "tree-6";
          document.getElementById("tree-5").className = "tree-6";
          document.getElementById("tree-6").className = "tree-6";
          document.getElementById("tree-7").className = "tree-6";
          document.getElementById("tree-8").className = "tree-6";
          document.getElementById("tree-9").className = "tree-6";
          document.getElementById("tree-10").className = "tree-6";
          document.getElementById("tree-11").className = "tree-6";
        } else {
          document.getElementById("tree").className = "tree-7";
          document.getElementById("tree-2").className = "tree-7";
          document.getElementById("tree-3").className = "tree-7";
          document.getElementById("tree-4").className = "tree-7";
          document.getElementById("tree-5").className = "tree-7";
          document.getElementById("tree-6").className = "tree-7";
          document.getElementById("tree-7").className = "tree-7";
          document.getElementById("tree-8").className = "tree-7";
          document.getElementById("tree-9").className = "tree-7";
          document.getElementById("tree-10").className = "tree-7";
          document.getElementById("tree-11").className = "tree-7";
        }
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
