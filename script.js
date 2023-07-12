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

    const new_div = document.createElement('div');
    new_div.append(check_box);
    new_div.append(listItem);

    taskList.prepend(new_div);

    taskInput.value = '';
  }
}

// Add event listener for the add button
addButton.addEventListener('click', addTask);
