var i = 0;

$(function () {
  $("#add_btn").click(function () {
    $("#add_btn").after(
      `<br><p id=e` +
        i++ +
        ` class="e" draggable="true" ondragstart="drag(event)" contentEditable>` +
        $("#text").val() +
        `</p>`
    );
  });
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  if (typeof Storage !== "undefined") {
    sessionStorage.setItem(data, [ev.target.id, $("#" + data).text()]);
  } else {
    alert("Sorry");
  }
}

$(function () {
  $("#read_btn").click(function () {
    for (var k = 0; k < sessionStorage.length; k++) {
      if (sessionStorage.getItem(sessionStorage.key(k)) != "true") {
        let text_id = sessionStorage.key(k);
        let value = sessionStorage.getItem(text_id).split(",");
        console.log(value[0]);
        console.log(value[1]);
        $("#" + value[0]).append(
          `<p id=` +
            text_id +
            ` class="e" draggable="true" ondragstart="drag(event)">` +
            value[1] +
            `</p>`
        );
      }
    }
  });
});

$(function () {
  $(document).on("keyup", ".e", function (event) {
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
});
