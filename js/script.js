// form submitted handler
const formSubmitted = e => {
  e.preventDefault();
  const itemToAdd = document.querySelector('#todo__additem').value;

  // If length 3 or greater, append item
  if (itemToAdd.length >= 3) {
    form.reset();
    let toDoDiv = '';
    //Main containing Div
    toDoDiv += leftToDoDiv;

    //Containing Div for task and task editor
    toDoDiv += '<div class ="row">'
    toDoDiv += '<span class="todo__item" >' + itemToAdd + '</span>';
    toDoDiv += '<span class="todo__editor">' +
      '<i class="fa fa-pencil"></i>' +
      '</span>';
    // Closing Div
    toDoDiv += rightToDoDiv;

    //Main Container closing div
    toDoDiv += rightToDoDiv;

    // Append new todo item
    todoContainer.innerHTML += toDoDiv;

    // Add event listeners for the new buttons
    let indiv_todoContainers = document.querySelectorAll('.toDoDiv');

    // If the item doesn't have a current update box, add event listener to edit button
    for (todo of indiv_todoContainers) {

      if (!todo.outerHTML.includes("updateForm")) {


        let editButton = todo.firstElementChild.children[1];
        editButton.addEventListener('click', editToDo);
      }

      //fix bug where click event disapears
      else {

        let todo_w_updateform = document.querySelectorAll('.todo__updateSubmit');
        todo_w_updateform.forEach(element => element.addEventListener('click', formUpdated));

      }
    }

  }
  // If length less then 3, give error
  else {
    // let toDoDiv = '';
    // toDoDiv += leftToDoDiv;
    // toDoDiv += 'ADD BOX SAYING NEED MINIMUM 3 CHAR';
    // toDoDiv += rightToDoDiv;
    // todoContainer.innerHTML += toDoDiv;
  }
}


//  Event handler when pencil clicked - to edit to do item
const editToDo = e => {
  // Container for to do item

  let itemContainer = e.target.parentNode.parentNode;
  //add update form for to do item
  itemContainer.innerHTML += update;

  //add event listener

  const updateForm = itemContainer.children[2];

  submitBtn = updateForm.children[1];

  submitBtn.addEventListener('click', formUpdated);

}


// Event handler when updating to do item text
const formUpdated = e => {
  e.preventDefault;

  //Container for form
  let formContainer = e.target.parentNode;
  //
  // todoText = text area for item
  let updateText = formContainer.firstElementChild;

  // //updateItem = what is in the input box to be used for update
  let updateItem = updateText.value;

  // Change to do item to the new text
  let todoContainer = e.target.parentNode.parentNode;
  todoContainer.firstElementChild.textContent = updateItem
  // //Add back event listener for the button
  e.target.parentNode.parentNode.children[1].addEventListener('click', editToDo);
  //
  // // Remove Form
  e.target.parentNode.remove();
  // // Add Event Listeners so  edit button can be pushed again
  // //let currentEditor =
}






// form set to add to do button
const form = document.querySelector('.todo__form');
const todoContainer = document.querySelector('.todo__itemcontainer');

//Surrounding container for each to do item
const leftToDoDiv = '<div class = ' + '"col-12 col-sm-6 col-md-4 col-lg-3 toDoDiv">';
const rightToDoDiv = '</div>';



// Form for updating todo item when pencil clicked
const update = '<div class="updateForm">' +
  '<input class="" type="text" class="todo__updateText">' +
  '<button  class="todo__updateSubmit">Update</button>' +
  '</div>';





// Event listeners
form.addEventListener('submit', formSubmitted);
