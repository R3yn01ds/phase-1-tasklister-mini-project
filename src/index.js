document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const task = document.getElementById("new-task-description")

  const form = document.querySelector("form")
  const tasks = document.querySelector("#tasks")
  let button = document.createElement("btn")

  button.addEventListener("click",e=>deleteButton(e))


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target.task.value
    addElement(inputValue)
  })
  function addElement(element) {
    let p = document.createElement("p")
    p.textContent = ` ${element} `
    tasks.appendChild(p)
  }
  function deleteButton(event){

  }
});
