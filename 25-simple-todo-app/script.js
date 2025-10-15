let todoList = ["Buy milk"];
displayItems();

function addTodo() {
  const inputElement = document.querySelector("#todo-input");
  const todoItem = inputElement.value.trim();

  if (todoItem === "") {
    alert("Please enter a todo!");
    return;
  }

  todoList.push(todoItem);
  inputElement.value = "";

  displayItems();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

function displayItems() {
  const containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
      <div class="todo-item">
        <span>${todoList[i]}</span>
        <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
      </div>
    `;
  }

  containerElement.innerHTML = newHtml;
}
