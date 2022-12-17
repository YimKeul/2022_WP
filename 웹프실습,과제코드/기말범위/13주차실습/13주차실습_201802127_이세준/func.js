const video = document.getElementById("video");
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const stopIt = document.getElementById("stopIt");
let x, y, myInterval;

myCanvas.addEventListener("click", (event) => {
  x = event.clientX - myCanvas.offsetLeft;
  y = event.clientY - myCanvas.offsetTop;
  video.classList.remove("hidden");

  ctx.clearRect(0, 0, 400, 400);
  clearInterval(myInterval);
  myInterval = setInterval(draw, 20);

  // console.log("x:" + x);
  // console.log("y:" + y);
});

function draw() {
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(video, x, y, 200, 150);
  x += 1;
  video.play();
}

stopIt.addEventListener("click", () => {
  clearInterval(myInterval);
  video.pause();
});
