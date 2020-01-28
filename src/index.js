document.addEventListener("DOMContentLoaded", () => {
  listenToButtonSubmit()
  

});


function listenToButtonSubmit() {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", handleFormSubmit);
}


function handleFormSubmit(event) {
  event.preventDefault();

  const inputField = event.target.querySelector("#new-task-description");
  const taskholder = document.getElementById("tasks");

  const createLi = document.createElement("li");
 
  createLi.textContent = inputField.value;
  
  taskholder.appendChild(createLi);

  inputField.value = "";

}

