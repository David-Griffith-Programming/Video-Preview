console.log("page loaded...");

var x = document.getElementById("myVideo");

function playVid() {
  x.play();
  x.muted = true;
}

function pauseVid() {
  x.pause();
  x.muted = false;
}
