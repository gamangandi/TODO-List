const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-items');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');

    var check_box = document.createElement('input');
    check_box.type = 'checkbox';

    listItem.textContent = taskText;

    let crossButton = document.createElement("button");
    crossButton.innerHTML = "&#9734;";
    crossButton.addEventListener("click", function() {
      listItem.remove();
      check_box.remove();
      crossButton.remove();
    });

    const new_div = document.createElement('div');
    new_div.append(check_box);
    new_div.append(listItem);
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
    }
  });

  

  
  
