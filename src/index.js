document.addEventListener("DOMContentLoaded", () => {
  //functions
  formSubmit();
  clickToDelete();
});

//add to tasks
const formSubmit = () => {
  const form = document.getElementById('create-task-form');
  
  form.addEventListener("submit", handleSubmit);
}

const handleSubmit = (e) => {
  e.preventDefault();
  
  const input = e.target.querySelector('#new-task-description')
  const todos = document.getElementById('tasks')
  
  const tasks = document.createElement('p');
  tasks.textContent = input.value
  
  todos.appendChild(tasks)
  
  input.value = ''
}


//delete
const clickToDelete = () => {
  const tasks = document.getElementById('tasks');
  tasks.addEventListener("click", handleClick)
}

const handleClick = (e) => {
  const tasks = document.getElementById('tasks');
  tasks.removeChild(e.target)

}