
const form = document.getElementById("to-do-form");
const input = document.getElementById("to-do-text");
const list = document.getElementById("todo-list");

const links = document.querySelector('.nav-link');

document.addEventListener('DOMContentLoaded', loadTasks);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = input.value.trim();
  if (task === "") {
    alert("Add task please")
  }
  addTask(task)
  saveTask(task)
  
  input.value = "";

})

function addTask(task) {
  const li = document.createElement('li');
  li.className = "bg-gray-100 px-4 rounded shadow flex justify-between items-center";
  li.innerHTML = `
  <span>${task}</span>
  <button class="text-red-500 hover:text-red-700 font-bold">X</button>`;

  li.querySelector('button').addEventListener('click', () => {
    li.remove();
    deleteTask(task)
  });

  list.appendChild(li)

}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))

}
// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task));
}
function deleteTask(taskToDelete) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task !== taskToDelete);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}