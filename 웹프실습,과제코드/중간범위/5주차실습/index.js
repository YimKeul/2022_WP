const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const todoBig = document.getElementById("todoBig");

const addBig = () => {
  //입력값
  var data = inputText.value;
  if (data == null) {
    return;
  }

  //리스트
  //버튼
  //하위 ol
  //큰 리스트
  var li = document.createElement("li");

  var span = document.createElement("span");
  var text = document.createTextNode(data);

  var innerOl = document.createElement("ol");
  var infoBtn = document.createElement("input"); //상세버튼

  infoBtn.type = "submit";
  infoBtn.value = "상세정보 추가";
  innerOl.type = "A";

  infoBtn.addEventListener("click", function () {
    const prompt = Small();
    if (prompt == null) {
      return;
    }
    var innerli = document.createElement("li");
    innerli.appendChild(document.createTextNode(prompt));
    innerOl.appendChild(innerli);

    innerli.addEventListener("click", function (e) {
      var tempdata = confirm(e.target.innerHTML + "를 삭제 하시겠습니까?");
      if (tempdata == null || tempdata == false) {
        return;
      } else {
        e.target.parentNode.removeChild(e.target);
      }
    });
  });

  span.addEventListener("click", function (e) {
    var tempdata = confirm(
      e.target.innerHTML + "어딘지확인를 삭제 하시겠습니까?"
    );
    if (tempdata == null || tempdata == false) {
      return;
    } else {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  });

  span.appendChild(text);
  li.appendChild(span);
  li.appendChild(infoBtn);
  li.appendChild(innerOl);
  todoBig.appendChild(li);
  //
  inputText.value = "";
};
addBtn.addEventListener("click", addBig);

const Small = () => {
  const data = prompt("상세정보 입력:");
  return data;
};
