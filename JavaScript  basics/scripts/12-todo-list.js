const todoList = [{
  name: 'make dinner',
  dueDate: '2022-09-20'
}, {
  name: 'wash dishes',
  dueDate: '2012-06-09'
}];

document.querySelector('.js-add-todo-button').
addEventListener('click', ()=>{
  addTodo();
})


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
    //Or we can write name, dueDate in shorthand
  });
  inputElement.value = '';
  renderTodoList();
}

function renderTodoList(){
let todoListHTML = '';
todoList.forEach((todoObject, index) => {
  const {name, dueDate} = todoObject;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick ="
  todoList.splice(${index}, 1);
  renderTodoList();
  " class="delete-todo-button js-delete-todo-list-button">Delete</button> `;
  todoListHTML += html;
document.querySelector('.js-todo-list').innerHTML = todoListHTML; 

document.querySelectorAll('.js-delete-todo-button').
forEach((deleteButton, index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index, 1);
  renderTodoList();
  } )
});
});
}