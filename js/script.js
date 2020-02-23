// form submitted handler
const formSubmitted = (e) => {
  event.preventDefault();
  const itemToAdd = document.querySelector('#todo__additem').value;

  // If length 3 or greater, append item
  if (itemToAdd.length >= 3) {
    form.reset();
    let toDoDiv = '';
    //Main containing Div
    toDoDiv += leftToDoDiv;

    //Containing Div for task and task editor
    toDoDiv += '<div class ="row">'
    toDoDiv += '<span class="">' + itemToAdd + '</span>';
    toDoDiv += '<span class="todo__editor" onClick="deleteToDo()">'
    + '<i class="fa fa-pencil"></i>'
    + '</span>';
    // Closing Div
    toDoDiv += rightToDoDiv;

    //Main Container closing div
    toDoDiv += rightToDoDiv;

    // Append new todo item
    todoContainer.innerHTML += toDoDiv;
  }
  // If length less then 3, give error
  else {
    let toDoDiv = '';
    toDoDiv += leftToDoDiv;
    toDoDiv += 'ADD BOX SAYING NEED MINIMUM 3 CHAR';
    toDoDiv += rightToDoDiv;
    todoContainer.innerHTML += toDoDiv;
  }
}


const deleteToDo = (e) => {

  console.log(e.target)
}












const form = document.querySelector('.todo__form');
const todoContainer = document.querySelector('.todo__itemcontainer');
const leftToDoDiv = '<div class = ' + '"col-12 col-sm-6 col-md-4 col-lg-3 toDoDiv">';
const rightToDoDiv = '</div>';
let edit = "";
console.log(edit);

// Event listeners
form.addEventListener('submit', formSubmitted);
