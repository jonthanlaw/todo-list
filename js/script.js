const formSubmitted = (e) => {
  event.preventDefault();
  const itemToAdd = document.querySelector('#todo__additem').value;

  let toDoDiv = '';
  toDoDiv += leftToDoDiv;
  toDoDiv += 'test';
  toDoDiv += rightToDoDiv;

  console.log(toDoDiv);

  todoContainer.innerHTML += toDoDiv;

}

const form = document.querySelector('.todo__form');
const todoContainer = document.querySelector('.todo__itemcontainer');
const leftToDoDiv = '<div class = ' + '"col-12 col-sm-6 col-md-4 col-lg-3 toDoDiv">';
const rightToDoDiv = '</div>';
form.addEventListener('submit', formSubmitted);
