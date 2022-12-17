const addText = document.getElementById("addText");
const addButton = document.getElementById("addButton");
const removeText = document.getElementById("removeText");
const removeButton = document.getElementById("removeButton");
const todolist = document.getElementById("todolist");

const modifyTodo = (event) => {
  const modifyString = prompt("수정할 값을 입력하시오");
  const target = event.target;
  target.childNodes[0].nodeValue = modifyString;
};

const addTodo = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(addText.value));
  li.addEventListener("click", modifyTodo);
  addText.value = "";
  todolist.appendChild(li);
};

const removeTodo = () => {
  let index = removeText.value;
  index = parseInt(index);
  removeText.value = "";
  todolist.removeChild(todolist.childNodes[index - 1]);
};

addButton.addEventListener("click", addTodo);
removeButton.addEventListener("click", removeTodo);
