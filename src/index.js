// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.



document.addEventListener("DOMContentLoaded", () => {
  // your code here
  listenForClick()
});

function listenForClick() {
  const taskForm = document.querySelector('form');
  taskForm.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  const taskTextBox = e.target.querySelector('#new-task-description');
  const task_description = taskTextBox.value;
  if (task_description != "") {
    const taskDisplayDiv = document.querySelector("#tasks")
    addTask(taskDisplayDiv, task_description)
  }




}

function addTask(element, description) {
  const newTaskLi = document.createElement('li')
  newTaskLi.textContent = description;
  element.append(newTaskLi);
}


