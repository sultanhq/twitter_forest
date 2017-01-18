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
