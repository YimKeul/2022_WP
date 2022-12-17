const addBtn = document.getElementById("addBtn");
const inputDet = document.getElementById("inputDet");
const inputName = document.getElementById("inputName");
const save = document.getElementById("save");
addBtn.addEventListener("click", () => {
  $.ajax({
    url: "add.php",
    type: "post",
    data: {
      dDet: inputDet.value,
      dName: inputName.value,
    },
    success: function (data) {
      save.innerHTML = null;
      save.innerHTML = data;
    },
  });
});

const inputSearch = document.getElementById("inputSearch");
const ol = document.getElementById("_ol");
let check;

inputSearch.addEventListener("keyup", () => {
  if (inputSearch.value != "") {
    if (document.getElementById("det").checked == true) {
      check = "det";
    } else {
      check = "name";
    }
    $.ajax({
      url: "search.php",
      type: "post",
      data: {
        dSearch: inputSearch.value,
        dCheck: check,
      },
      success: function (data) {
        ol.innerHTML = null;
        ol.innerHTML = data;
      },
    });
  } else {
    ol.innerHTML = null;
  }
});
