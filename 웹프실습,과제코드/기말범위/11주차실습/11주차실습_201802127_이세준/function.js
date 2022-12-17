var i = 0;
const addInput = document.getElementById("addInput");
const addBtn = document.getElementById("addBtn");
const read = document.getElementById("read");
const blank = document.getElementById("blank");

const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");

const inputbox = document.getElementsByClassName("inputbox");

for (let j = 0; j < inputbox.length; j++) {
  inputbox[j].addEventListener("click", () => {
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    //   sessionStorage.setItem(data, ev.target.id);
    sessionStorage.setItem(data, [ev.target.id, $("#" + data).text()]);
  });
}

addBtn.addEventListener("click", () => {
  makedragTarget(addInput.value);
});
function makedragTarget(data) {
  $("#blank").append(
    `<p id=e` +
      i++ +
      ` class="e" draggable="true" ondragstart="drag(event)" contentEditable>` +
      data +
      `</p>`
  );
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  //   sessionStorage.setItem(data, ev.target.id);
  sessionStorage.setItem(data, [ev.target.id, $("#" + data).text()]);
  document.querySelector(".e").addEventListener("keyup", () => {
    for (var j = 0; j < i; j++) {
      if (sessionStorage.getItem("e" + j) != null) {
        let value = sessionStorage.getItem("e" + j).split(",");
        console.log(value[0]);
        console.log(value[1]);
        if (typeof Storage !== "undefined") {
          sessionStorage.setItem("e" + j, [value[0], $("#e" + j).text()]);
        } else {
          alert("Sorry");
        }
      }
    }
  });
}

read.addEventListener("click", () => {
  for (var i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    let value = sessionStorage.getItem(sessionStorage.key(i));
    if (value != "true") {
      console.log(key, " ", value);
      let temp = value.split(",");
      let place = temp[0];
      let data = temp[1];

      $("#" + place).append(
        `<p id=` +
          key +
          ` class="e" draggable="true" ondragstart="drag(event)" contentEditable>` +
          data +
          `</p>`
      );
    }
  }
});
