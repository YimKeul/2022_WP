const readBtn = document.getElementById("readBtn");
const appendPlanBtn = document.getElementById("appendPlanBtn");
const tempbox = document.getElementById("tempbox");
// let numOfPlan = 1;
readBtn.addEventListener("click", onReadBtnClick);
appendPlanBtn.addEventListener("click", onappendPlanBtn);

function onappendPlanBtn(event) {
  const todo = document.getElementById("todo").value;
  const todoElement = document.createElement("span");
  todoElement.innerText = todo;
  todoElement.contentEditable = true;
  todoElement.draggable = true;
  todoElement.classList.add("plan");
  todoElement.id = todo;
  //   numOfPlan = numOfPlan + 1;
  todoElement.ondragstart = function (event) {
    event.dataTransfer.setData("text", event.target.id);
  };
  tempbox.appendChild(todoElement);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
  if (typeof Storage !== "undefined") {
    localStorage.setItem(data, ev.target.id);
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function onReadBtnClick(event) {
  for (i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);
    const todoElement = document.createElement("span");
    todoElement.innerText = x;
    todoElement.contentEditable = true;
    todoElement.draggable = true;
    todoElement.classList.add("plan");
    todoElement.id = x;
    todoElement.ondragstart = function (event) {
      event.dataTransfer.setData("text", event.target.id);
    };
    console.log(document.getElementById(localStorage.getItem(x)));
    document.getElementById(localStorage.getItem(x)).appendChild(todoElement);
  }
}
