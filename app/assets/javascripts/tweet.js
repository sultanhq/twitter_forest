window.onload = function() {
  $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
};
