const read = document.getElementById("read");

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

  sessionStorage.setItem(data, ev.target.id);
  // if (typeof Storage !== "undefined") {
  // } else {
  // document.getElementById("result").innerHTML =
  // "Sorry, your browser does not support Web Storage...";
  // }
}

function readCart() {
  // console.log(sessionStorage);
  // console.log(sessionStorage.length);
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    let value = sessionStorage.getItem(sessionStorage.key(i));
    console.log("for : ", key, " ", value);
    if (value != "true") {
      // document.getElementById(value).appendChild(document.getElementById(key));
      // let imgKey = localStorage.key(i);
      // let divId = localStorage.getItem(imgKey);
      let imgNode = document.getElementById(key);

      document.getElementById(value).appendChild(imgNode);
    }
    // console.log(key);
    // console.log(sessionStorage.getItem(sessionStorage.key(i)));
    //   document
    //     .getElementById(sessionStorage.getItem(key))
    //     .appendChild(document.getElementById(key));
  }
}

read.addEventListener("click", readCart);
