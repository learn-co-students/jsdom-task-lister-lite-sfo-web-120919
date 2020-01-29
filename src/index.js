document.addEventListener("DOMContentLoaded", function () {
  // your code here
  gettask();
  sele();
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
  const se = document.getElementById("select");

  const ele = document.createElement('li');
  // ele.textContent = c.value
  ele.innerHTML = c.value.fontcolor(se.value)
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

function sele()
{
  const s = document.createElement("select");
  s.id = "select"

  const so1 = document.createElement("option");
  so1.id = "red";
  so1.value = "red";
  so1.textContent= "red";
  const so2 = document.createElement("option");
  so2.id = "yellow";
  so2.value = "yellow";
  so2.textContent= "yellow";
  const so3 = document.createElement("option");
  so3.id = "green";
  so3.value = "green";
  so3.textContent= "green";

  const f = document.getElementById("create-task-form");
  f.appendChild(s);
  s.appendChild(so1);
  s.appendChild(so2);
  s.appendChild(so3);
}
