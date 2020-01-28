document.addEventListener("DOMContentLoaded", () => {
  // your code here
  listenToTaskSubmit();
});


function listenToTaskSubmit() {
  const task = document.getElementById("create-task-form");

  task.addEventListener("submit", handleTaskSubmit);
}

function handleTaskSubmit(event) {
  event.preventDefault();

  const inputField = event.target.querySelector("#new-task-description");
  const taskBox = document.getElementById("tasks");

  const createLi = document.createElement("li");
  createLi.textContent = inputField.value;
  taskBox.appendChild(createLi);
  
  const createButton = document.createElement("button")
  createButton.textContent = "X"
  createButton.setAttribute("data-name", inputField.value);
  createLi.appendChild(createButton);

  // commentsContainer.innerHTML += `<h2>hello there</h2>`;

  inputField.value = "";

  taskBox.addEventListener('click', handleClick)


  function removeTask(button) {
      // remove task here



      
      const parent = button.parentElement
   
      
      
       console.log(parent.tagName)
       if (parent.tagName === "LI") {
         console.log("triggered")
         parent.remove();
       }
  }

  function handleClick(e) {

     
    removeTask(e.target)


  }

}

