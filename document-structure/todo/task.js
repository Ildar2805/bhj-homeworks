function addItem(text) {
    const taskTitle = document.createElement('div');
    taskTitle.innerHTML = text;
    taskTitle.className = 'task__title';

    const taskRemove = document.createElement('a');
    taskRemove.innerHTML = '&times;';
    taskRemove.className = 'task__remove';

    let task = document.createElement('div');
    task.className = 'task';
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);

    tasksList.appendChild(task);

    taskRemove.addEventListener('click', (e) => {
        taskRemove.parentElement.remove();
        savedTasks = savedTasks.filter((e) => e !== text);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
}

const button = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(addItem);

button.addEventListener('click', (e) => {
    let text = input.value;
    if (text.trim() === '') {
        alert('Please write something to do!');
        input.value = '';
        e.preventDefault();
    } else {
        savedTasks.push(text);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        input.value = '';
        addItem(text);
        e.preventDefault();
    }        
});