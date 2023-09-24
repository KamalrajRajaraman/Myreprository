const toDoList = [];
renderToDoList();

function renderToDoList() {
  let todoHTML = ``;
  toDoList.forEach(function (todoObject, index) {
    let { name, date } = todoObject;
    const Html = `
    <div>${name}</div>
    <div>${date}</div>
    <button class ="delete-button"onclick ="deleteToDo(${index})">Delete</button>
    `;
    todoHTML += Html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoHTML;
}

function addToList() {
  const inputElemet = document.querySelector(".js-todo-input");
  const name = inputElemet.value;
  const dateElement = document.querySelector(".js-todo-date");
  const date = dateElement.value;
  toDoList.push({ name, date });
  inputElemet.value = "";
  renderToDoList();
}
function deleteToDo(index) {
  toDoList.splice(index, 1);
  renderToDoList();
}
