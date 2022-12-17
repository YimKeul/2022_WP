const btnAdd = document.getElementById("btn-add");
const userInput = document.getElementById("user-input");
const mainContentOl = document.getElementById("main-content-ol");

btnAdd.addEventListener("click", addTodo);

function addTodo() {
  const input = userInput.value;
  if (input == null || input == "") return;

  const todo = document.createElement("li");
  const span = document.createElement("span");

  const text = document.createTextNode(input);
  //detail이 info
  const detailBtn = document.createElement("input");
  const detailOl = document.createElement("ol");

  detailBtn.type = "button";
  detailBtn.value = "상세정보 추가";
  detailOl.type = "A";
  detailBtn.addEventListener("click", () => addDetail(detailOl));

  span.addEventListener("click", (e) => {
    const ask = confirm(e.target.innerHTML + "를 삭제 하시겠습니까?");
    if (ask == null || ask == false) return;

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });

  span.appendChild(text);
  todo.appendChild(span);
  todo.appendChild(detailBtn);
  todo.appendChild(detailOl);
  mainContentOl.appendChild(todo);
}

function addDetail(li) {
  const promtValue = prompt("상세정보 입력:");
  if (promtValue == null || promtValue == "") return;

  const detail = document.createElement("li");
  const text = document.createTextNode(promtValue);

  detail.addEventListener("click", (e) => {
    const ask = confirm(e.target.innerHTML + "를 삭제 하시겠습니까?");
    if (ask == null || ask == false) return;

    e.target.parentNode.removeChild(e.target);
  });

  detail.appendChild(text);
  li.appendChild(detail);
}
