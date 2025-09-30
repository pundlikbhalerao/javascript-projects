function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Task";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      li.remove();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please Enter Task");
  }
}
