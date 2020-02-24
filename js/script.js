// form submitted handler
const formSubmitted = e => {
  e.preventDefault();
  let itemToAdd = document.querySelector('#todo__additem').value;

  // If length 3 or greater, append item
  if (itemToAdd.length >= 3) {
    form.reset();
    let toDoDiv = '';
    //Main containing Div
    toDoDiv += leftToDoDiv;

    //Containing Div for task and task editor
    toDoDiv += '<div class ="row">'
    toDoDiv += '<div class = "col-9">';
    toDoDiv += '<span class="todo__item" >' + itemToAdd + '</span>';
    toDoDiv += '<span class="todo__editor">' +
      '<i class="fa fa-pencil"></i>' +
      '</span>';
    toDoDiv += '</div>';

    // Add complete icon
    toDoDiv += complete;

    //add delete icon
    toDoDiv += remove;

    // Closing Div for row
    toDoDiv += rightToDoDiv;

    //Add form container
    toDoDiv += '<div class="updateForm"></div>';

    //Add timestamp
    let d = new Date();
    toDoDiv += '<p>' + 'Created on: ' + dayNames[d.getDay()] + ", " + monthNames[d.getMonth()] +
      " " + d.getDate() + " " + d.getFullYear() + ", " + d.getHours() + ":" +
      d.getMinutes() + ":" + d.getSeconds() + '</p>';

    // Add Container for complete time

    toDoDiv += "<div></div>";


    //Main Container closing div
    toDoDiv += rightToDoDiv;

    // Append new todo item
    todoContainer.innerHTML += toDoDiv;

    // Add event listeners for the new buttons
    let indiv_todoContainers = document.querySelectorAll('.toDoDiv');

    // If the item doesn't have a current update box, add event listener to edit button
    for (todo of indiv_todoContainers) {

      if (!todo.outerHTML.includes("todo__updateText")) {

        let editButton = todo.firstElementChild.firstElementChild.children[1].children[0];
        editButton.addEventListener('click', editToDo);
      } else {
        console.log('in here');
        //Add event listner for update button
        console.log(todo.children[1].children[1]);
        todo.children[1].children[1].addEventListener('click', formUpdated);
      }


    }
    // Add Event listeners for complete button

    let finishBtn = document.querySelectorAll('.btn--complete');
    for (finish of finishBtn) {
      finish.addEventListener('click', completeHandler);
    }
    // Add Event listeners for uncomplete button

    let uncompleteBtn = document.querySelectorAll('.btn--uncomplete');
    for (uncomplete of uncompleteBtn) {
      uncomplete.addEventListener('click', uncompleteHandler);
    }

    let removeBtn = document.querySelectorAll('.btn--remove');
    for (removeMe of removeBtn) {
      removeMe.addEventListener('click', removeHandler);
    }
  }
  // End of container for if length greater then 3


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
  //Remove event listner for this button
  e.target.removeEventListener('click', editToDo);
  // Container for to do item

  let itemContainer = e.target.parentNode.parentNode.parentNode.parentNode;

  //add update form for to do item
  itemContainer.children[1].innerHTML += update;

  //add event listener

  const updateForm = itemContainer.children[1];

  submitBtn = updateForm.children[1];

  submitBtn.addEventListener('click', formUpdated);

}


// Event handler when updating to do item text
const formUpdated = e => {
  //prevent default behaviors
  e.preventDefault;
  //Remove event listener for this button
  e.target.removeEventListener('click', formUpdated);
  //Container for form
  let formContainer = e.target.parentNode;
  //
  // todoText = text area for item
  let updateText = formContainer.firstElementChild;

  // //updateItem = what is in the input box to be used for update
  let updateItem = updateText.value;

  // Change to do item to the new text
  let todoContainer = formContainer.parentNode;

  // Set new text in todo
  todoContainer.firstElementChild.firstElementChild.firstElementChild.textContent = updateItem;

  //Add back event listener for the edit button
  todoContainer.firstElementChild.firstElementChild.children[1].children[0].addEventListener('click', editToDo);

  // Fix bug where toggle stops working
  let finishBtn = document.querySelectorAll('.btn--complete');
  for (finish of finishBtn) {
    finish.addEventListener('click', completeHandler);
  }
  // Add Event listeners for uncomplete button

  let uncompleteBtn = document.querySelectorAll('.btn--uncomplete');
  for (uncomplete of uncompleteBtn) {
    uncomplete.addEventListener('click', uncompleteHandler);
  }

  // // Remove Form
  e.target.parentNode.innerHTML = "";
  // // Add Event Listeners so  edit button can be pushed again
  // //let currentEditor =
}

// Handler for completed task
const completeHandler = (e) => {
  //Remove event listener
  e.target.removeEventListener('click', completeHandler);
  //Set parent Container
  let parentContainer = e.target.parentNode.parentNode.parentNode.parentNode;

  //set d = current date and time
  let d = new Date();

  //Set complete time
  parentContainer.children[3].innerHTML = '<p>' + 'Completed on: ' + dayNames[d.getDay()] + ", " + monthNames[d.getMonth()] +
    " " + d.getDate() + " " + d.getFullYear() + ", " + d.getHours() + ":" +
    d.getMinutes() + ":" + d.getSeconds() + '</p>';

  //change to toggle button
  e.target.classList.remove('fa-check');
  e.target.classList.remove('btn--complete');
  e.target.classList.add('fa-repeat');
  e.target.classList.add('btn--uncomplete');

  //add event listner to toggle
  e.target.addEventListener('click', uncompleteHandler);
}

// Handler for toggling to uncomplete task
const uncompleteHandler = (e) => {

  //remove event listener
  e.target.removeEventListener('click', uncompleteHandler);

  // Change to check button
  e.target.classList.remove('fa-repeat');
  e.target.classList.remove('btn--uncomplete');
  e.target.classList.add('fa-check');
  e.target.classList.add('btn--complete');

  //Set parent Container
  let parentContainer = e.target.parentNode.parentNode.parentNode.parentNode;

  //remove complete time
  parentContainer.children[3].innerHTML = "";

  // Add event listener for check
  e.target.addEventListener('click', completeHandler);
}



// Handler for removing to do item

const removeHandler = e => {
  e.target.removeEventListener('click', removeHandler);

  // Remove to do item
  e.target.parentNode.parentNode.parentNode.parentNode.remove();
}



// form set to add to do button
const form = document.querySelector('.todo__form');
const todoContainer = document.querySelector('.todo__itemcontainer');

//Surrounding container for each to do item
const leftToDoDiv = '<div class = ' + '"col-12 col-sm-6 col-md-4 col-lg-3 toDoDiv">';
const rightToDoDiv = '</div>';


// Add complete and remove button
const complete = '<div class = "col-3"><span><i class="fa fa-check btn--complete"></i></span>';
const remove = '<span><i class="fa fa-times btn--remove"></i></span></div>';


// Form for updating todo item when pencil clicked
const update = '<input class="todo__updateText" type="text">' +
  '<button  class="todo__updateSubmit">Update</button>';

// Set Day names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"
];

// Set month names
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];




// Event listeners
form.addEventListener('submit', formSubmitted);
