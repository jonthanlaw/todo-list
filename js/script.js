
const formSubmitted = (e) => {
  event.preventDefault();
  const itemToAdd = document.querySelector('#todo__additem').value;
  todoContainer.innerHTML += leftToDoDiv;
}

const form = document.querySelector('.todo__form');
const todoContainer = document.querySelector('.todo__itemcontainer');
const leftToDoDiv = '<div class = '+ '"col col-sm-6 col-md-4 col-lg-3 justify-content-center">testtext</div>';

form.addEventListener('submit', formSubmitted);
