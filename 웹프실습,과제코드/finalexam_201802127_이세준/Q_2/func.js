c = {
  img1: "td1",
  img2: "td2",
  img3: "td3",
  img4: "td4",
  img5: "td5",
  img6: "td6",
  img7: "td7",
  img8: "td8",
  img9: "td9",
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var allow = true;
  for (var i = 1; i <= 9; i++) {
    if (ev.target.id == "img" + i) {
      allow = false;
    }
  }
  if (
    localStorage.getItem(ev.target.id) !== null &&
    localStorage.getItem(data) !== null
  ) {
    let target_div = localStorage.getItem(ev.target.id);
    let data_div = localStorage.getItem(data);
    localStorage.removeItem(data);
    localStorage.setItem(data, target_div);
    localStorage.removeItem(ev.target.id);
    localStorage.setItem(ev.target.id, data_div);
    $("#" + target_div).append($("#" + data));
    $("#" + data_div).append($("#" + ev.target.id));
  }
  if (allow) {
    ev.target.appendChild(document.getElementById(data));
    if (localStorage.getItem(data) == null) {
      localStorage.setItem(data, ev.target.id);
    } else {
      localStorage.removeItem(data);
      localStorage.setItem(data, ev.target.id);
    }
  }
  complete();
}
const readBtn = document.getElementById("readBtn");
readBtn.addEventListener("click", () => {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const value = localStorage.getItem(key);
  }
  for (var i = 0; i < localStorage.length; i++) {
    let imgId = localStorage.key(i);
    let divId = localStorage.getItem(imgId);
    document.getElementById(divId).appendChild(document.getElementById(imgId));
  }
});

function complete() {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const value = localStorage.getItem(key);
  }
  if (localStorage.length == 9) {
    for (var i = 0; i < localStorage.length; i++) {
      let imgId = localStorage.key(i);
      let divId = localStorage.getItem(imgId);
      if (divId != c[imgId]) {
        break;
      }
    }
    if (i == 9) {
      alert("complete");
    }
  }
}
