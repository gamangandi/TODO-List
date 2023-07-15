const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-items');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    // listItem.classList.add('task-item-text');

    var check_box = document.createElement('input');
    check_box.type = 'checkbox';

    const star = document.createElement('span');
    // star.classList.add('list-item-star');
    star.innerHTML = '&#9734;'; // Star symbol (☆)
    star.title = "mark as important";

    listItem.textContent = taskText;

    let crossButton = document.createElement("button");
    // crossButton.classList.add('list-item-delete');
    crossButton.innerHTML = "&#10006";
    crossButton.title = "delete task";


    const new_div = document.createElement('div');
    // new_div.classList.add('list-item-div');
    new_div.append(check_box);
    new_div.append(listItem);
    new_div.append(star);
    new_div.append(crossButton);

    taskList.prepend(new_div);

    taskInput.value = '';
  }
}

  // Add event listener for the add button
  addButton.addEventListener('click', addTask);

// Add event listener for checkbox changes (using event delegation)
taskList.addEventListener('change', function(event) {
    const check_box = event.target;
    const listItem = check_box.parentNode.querySelector('li');

    if (check_box.checked) {
      listItem.style.textDecoration = 'line-through';
    
      taskList.removeChild(check_box.parentNode);
      taskList.appendChild(check_box.parentNode);
    } else {
      listItem.style.textDecoration = 'none';
      taskList.removeChild(check_box.parentNode);
      taskList.prepend(check_box.parentNode);
    }
  });


  
  taskList.addEventListener('click', function(event) {
    const star = event.target;
    const listItem = star.parentNode;
  
    if (star.tagName === 'SPAN') {
      listItem.classList.toggle('important');
      if (star.innerHTML === '☆') {
        star.innerHTML = '★';
        star.title = "unmark";
      } else {
        star.innerHTML = '☆';
        star.title = "mark as important";
      }
      star.classList.toggle('star-clicked');
    }
  });

  taskList.addEventListener('click', function(event){
    const crossButton = event.target;

    if(crossButton.tagName === 'BUTTON'){
        taskList.removeChild(crossButton.parentNode);
    }
  });
  
