document.addEventListener("DOMContentLoaded", () => {
  // listenToCreateTask();
  listenToFormSubmission();
});
// function that listens to "create new task button"
// function listenToCreateTask(){
//   const createTaskButton = document.getElementsByTagName('input')[1];
//   createTaskButton.addEventListener('click', function(){
//     console.log('create task button clicked!')
//   })
// };


// function that grabs user data from form 
//document.getElementsByTagName('input')[0]
function listenToFormSubmission(){
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleFormSubmit);
};

function handleFormSubmit(event){
  event.preventDefault();
  console.log('submission handling');
  const inputField = event.target.querySelector("#new-task-description")
  let newTasks = document.getElementById('tasks');
  let taskPtag = document.createElement('p')
  taskPtag.textContent = inputField.value;

  newTasks.appendChild(taskPtag);
  inputField.value = "";
}


// function that adds data to "My ToDos"


