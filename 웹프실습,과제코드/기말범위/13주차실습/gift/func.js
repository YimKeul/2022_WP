const canvas = document.getElementById("canvas");
canvas.addEventListener("click", (event) => {
  x = event.clientX - canvas.offsetLeft;
  y = event.clientY - canvas.offsetTop;
  console.log(x, y);
  document.querySelector("video").classList.remove("hidden");
  document.querySelector("video").classList.add("autoplay");
});
// canvas.addEventListener("click", () => {
//
// });

function draw() {
  var ctx = canvas.getContext("2d");
  ctx.stroke();
}
