window.onload = function() {
  $("#thermostat-fill").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
};
