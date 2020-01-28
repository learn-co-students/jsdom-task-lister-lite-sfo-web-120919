document.addEventListener("DOMContentLoaded", function () {
  // your code here
  gettask();
});

function gettask()
{
  const a = document.getElementById("create-task-form");
  a.addEventListener('submit',getvalue);
}

function getvalue(event)
{
  console.log("Good");
  
  event.preventDefault();
  const c = document.getElementById("new-task-description");
  const b = document.getElementById("tasks");
  const ele = document.createElement('li');
  ele.textContent = c.value
  b.appendChild(ele);
  
  
  const but = document.createElement("button");
  but.textContent = "X"
  but.setAttribute("data-name",c.value );
  ele.appendChild(but)

  b.addEventListener("click",func);

  c.value = "";
  
}

function func(event)
{
  const t = event.target
  const pa = t.parentElement;
  pa.remove();
  // debugger;
}
