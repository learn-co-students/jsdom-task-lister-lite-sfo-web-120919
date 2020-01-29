const todoForm = document.querySelector("#create-task-form");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskDescription = event.target.querySelector(
    "#new-task-description"
  );
  const taskList = document.querySelector("#tasks");

  const newTask = document.createElement("p");
  newTask.textContent = newTaskDescription.value;
  taskList.appendChild(newTask);

  const deleteSign = document.createElement("button");
  deleteSign.textContent = "Done";
  deleteSign.classList.add("button");
  newTask.appendChild(deleteSign);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("button"))
    event.target.parentElement.remove();
});
