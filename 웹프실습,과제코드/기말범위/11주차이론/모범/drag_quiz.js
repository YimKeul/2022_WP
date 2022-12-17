document.getElementById("img1").addEventListener("dragstart", drag);
document.getElementById("img2").addEventListener("dragstart", drag);
document.getElementById("img3").addEventListener("dragstart", drag);
document.getElementById("img4").addEventListener("dragstart", drag);
document.getElementById("img5").addEventListener("dragstart", drag);
document.getElementById("bt1").addEventListener("click", allRead);

let paraId;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  paraId = document.getElementById(ev.target.id).parentNode.id;
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  var h = ev.target.id;

  var imgs = document.getElementById(h);
  var coImgs = imgs.getElementsByTagName("img").length;

  let divArea = document.getElementById(h);
  divArea.appendChild(document.getElementById(data));

  if (h == "div2" && paraId == "div1") {
    localStorage.setItem(data, "div2");
  } else if (h == "div2" && paraId == "div3") {
    localStorage.removeItem(data);
    localStorage.setItem(data, "div2");
  } else if (h == "div3" && paraId == "div1") {
    localStorage.setItem(data, "div3");
  } else if (h == "div3" && paraId == "div2") {
    localStorage.removeItem(data);
    localStorage.setItem(data, "div3");
  }
}

function allRead() {
  let sLen = localStorage.length;
  sorting();
  if (sLen > 0) {
    for (let i = 0; i < sLen; i++) {
      let imgKey = localStorage.key(i);
      let divId = localStorage.getItem(imgKey);
      let imgNode = document.getElementById(imgKey);

      document.getElementById(divId).appendChild(imgNode);
    }
  }
}

function sorting() {
  // console.log(localStorage.length);
  // var sortarray = [];
  // var tempnum = localStorage.length;
  // while(true){
  //   if(tempnum ==0) break;

  // }
  // console.log(temp);
  var temparray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let imgKey = localStorage.key(i);
    let divId = localStorage.getItem(imgKey);
    let imgNode = document.getElementById(imgKey);
    // console.log();
    temparray[i] = imgKey;
  }
  temparray.sort();
  temparray.forEach((element) => {
    console.log(element);
  });
}
