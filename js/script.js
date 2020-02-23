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
let i = 0;
      // If the item doesn't have a current update box, add event listener to edit button
      for (todo of indiv_todoContainers) {
i++;
        if (!todo.outerHTML.includes("updateForm")) {
          console.log(i);
            let editButton = todo.firstElementChild.children[1];
            editButton.addEventListener('click', editToDo);
          }
          //    editor.addEventListener('click', editToDo);
        }
        //  editor[editor.length]addEventListener('click', editToDo));
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
      console.log('setting updateform to itemcontainer.children[2]')
      updateForm.addEventListener('submit', formUpdated);

    }


    // Event handler when updating to do item text
    const formUpdated = e => {
      e.preventDefault();

      //Container for to do item
      let parentContainer = e.target.parentNode;

      // todoText = text area for item
      let todoText = parentContainer.firstElementChild;

      //updateItem = what is in the input box to be used for update
      updateItem = e.target.firstElementChild.value;

      // set todoText = updatedItem
      todoText.textContent = updateItem;

      //Add back event listener for the button
      parentContainer.children[1].addEventListener('click', editToDo);

      // Remove Form
      e.target.remove();
      // Add Event Listeners so  edit button can be pushed again
      //let currentEditor =
    }





    // form set to add to do button
    const form = document.querySelector('.todo__form');
    const todoContainer = document.querySelector('.todo__itemcontainer');

    //Surrounding container for each to do item
    const leftToDoDiv = '<div class = ' + '"col-12 col-sm-6 col-md-4 col-lg-3 toDoDiv">';
    const rightToDoDiv = '</div>';



    // Form for updating todo item when pencil clicked
    const update = '<form class="updateForm">' +
      '<input class="" type="text"class="todo__updateText">' +
      '<input class="" type="submit" class="todo__updateSubmit" value="Update">' +
      '</form>';





    // Event listeners
    form.addEventListener('submit', formSubmitted);
