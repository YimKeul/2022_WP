const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const RootList = document.getElementById("RootList");

const Prompt = () => {
  const data = prompt("상세정보 입력 : ");
  return data;
};

function addRoot() {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var text = document.createTextNode(inputText.value);

  var sub_ol = document.createElement("ol");
  var sub_btn = document.createElement("input");
  sub_btn.type = "submit";
  sub_btn.value = "상세정보 추가";
  sub_ol.type = "A";

  sub_btn.addEventListener("click", () => {
    addSub(sub_ol);
  });
  span.appendChild(text);
  li.appendChild(span);
  li.appendChild(sub_btn);
  li.appendChild(sub_ol);
  span.addEventListener("click", (e) => {
    var focus = confirm(e.target.innerHTML + "를 삭제하시겠습니까?");
    console.log(e.target.innerHTML);
    if (focus == true) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  });

  RootList.append(li);
  inputText.value = "";
}

function addSub(sub_ol_props) {
  var promptData = Prompt();
  if (promptData == null) {
    return;
  }
  var sub_li = document.createElement("li");
  var text = document.createTextNode(promptData);
  sub_li.appendChild(text);
  sub_ol_props.appendChild(sub_li);

  sub_li.addEventListener("click", (e) => {
    var focus = confirm(e.target.innerHTML + "를 삭제하시겠습니까?");
    if (focus == true) {
      e.target.parentNode.removeChild(e.target);
    }
  });
}

addBtn.addEventListener("click", addRoot);
