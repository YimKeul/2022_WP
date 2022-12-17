const submitBtn = document.getElementById("submitBtn");
const selectdg = document.getElementById("selectdg");
const quiz = document.getElementById("quiz");
const mid = document.getElementById("mid");
const fin = document.getElementById("fib");
var select_data;
var controlselet = false;
var controlcheck = 0;
// const tempArray = [];
selectdg.addEventListener("change", () => {
  select_data = selectdg.value;
  $.ajax({
    url: "condition.php",
    type: "post",
    data: {
      now_condition: select_data,
    },
    success: function (data) {
      $("#noewselect").empty();
      $("#noewselect").append(data);
      // console.log(data);
    },
  });
  controlselet = true;
});

submitBtn.addEventListener("click", () => {
  const tempArray = [];
  for (let i = 0; i < 3; i++) {
    if (document.getElementsByName("cb")[i].checked == true) {
      controlcheck += 1;
      tempArray.push(document.getElementsByName("cb")[i].id);
    }
  }

  if (controlcheck == 0 || controlselet == false) {
    alert("검색 조건을 상세히 선택해 주세요.");
  } else {
    console.log(document.getElementById("nowselect").value);
    $.ajax({
      url: "result.php",
      type: "post",
      data: {
        checkType: selectdg.value,
        checkValue: document.getElementById("nowselect").value,
        checkArray: tempArray,
      },
      success: function (data) {
        $("#resultArea").empty();
        $("#resultArea").append(data);
      },
    });
  }
});
