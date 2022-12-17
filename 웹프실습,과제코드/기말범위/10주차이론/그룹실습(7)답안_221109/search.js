document.getElementById("a1").addEventListener("keyup", searchName);

function searchName() {
  let val1 = document.getElementById("a1").value;

  let ck1;

  if (document.getElementById("b1").checked == true) {
    ck1 = "dept";
  } else {
    ck1 = "name";
  }
  if (val1.length > 0) {
    $.ajax({
      url: "search.php",
      type: "POST",
      data: {
        searchVal: val1,
        ckVal: ck1,
      },
      success: function (data) {
        document.getElementById("o1").innerHTML = data;
      },
      error: function (e) {
        alert(e.reponseText);
      },
    });
  }
}
