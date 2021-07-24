const input =document.getElementById("input");
const form =document.getElementById("form");
const todos = document.getElementById("todos");

form.addEventListener('submit',(e)=> {
  e.preventDefault();


  const todoText = input.value;
  input.value="";
  if(todoText){
    const todoEl = document.createElement("li");
    todoEl.innerText=todoText;
    todos.appendChild(todoEl);
    todoEl.addEventListener('click',()=>{
      todoEl.style.textDecoration = "line-through";
    })
    todoEl.addEventListener('dblclick',()=>{
      todoEl.remove();
    })

  }

})