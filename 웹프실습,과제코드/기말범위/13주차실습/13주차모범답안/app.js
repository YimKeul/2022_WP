var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let stopItBtn = document.getElementById("stopIt");
canvas.addEventListener("click", onCanvasClick);
stopItBtn.addEventListener("click", onstopItClick);

let x = 0;
let y = 100;
let play = true;
let videoElement = document.getElementById("video");
let my = setInterval(movemoveInterval, 20);

function onstopItClick(event) {
    videoElement.pause();
    clearInterval(my);
    play = false;
}



function onCanvasClick(event) {
    if (!play) {
        videoElement.play();
        my = setInterval(movemoveInterval, 20);
        play = true;
    } else {

    }
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;

    render();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(videoElement, x, y, 200, 150);
    // 첫 번째 인자로 비디오를 넣어준다.
    requestAnimationFrame(render);
}


function movemoveInterval () {
    x++;
}