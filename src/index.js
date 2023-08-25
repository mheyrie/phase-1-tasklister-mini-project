document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.querySelector("form")
taskForm.addEventListener("submit", (e) => {
  e.preventDefault()
  handleInput(e.target.newtaskdescription.value)
  taskForm.reset()  
})
})

function handleInput(tas){
  taskList = document.querySelector("#tasks");
  let li = document.createElement("li");
  let btn = document.createElement("button")
  btn.addEventListener("click", del) 
  btn.textContent = "X"
  li.textContent = tas
  li.appendChild(btn)
  taskList.appendChild(li)
 }
 function del(e){
  e.target.parentNode.remove()

 }