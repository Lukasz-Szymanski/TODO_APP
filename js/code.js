// Define the task object constructor

function Task(description) {
    this.description = description;
    this.completed = false;
}


// Define an array to store the tasks 

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks();




// Function to add a new task to the list 

function addTask() {
    const taskInput = document.getElementById("task-input").value;
    document.getElementById("task-input").value = "";
    const newTask = new Task(taskInput.value);
    tasks.push(taskInput);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}





// Function to display the current tasks 

function displayTasks() {
    let tasksList = "";
    for (let i = 0; i < tasks.length; i++) {
        tasksList += `<li>${tasks[i]}</li>`;
    }
    document.getElementById("task-list").innerHTML = tasksList;
}


// Event listener to handle the form submission 

document.getElementById("add-task").addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});


// clear tasks 

function clearTasks() {
    tasks = [];
    displayTasks();
}
const clearButton = document.getElementById("clear-tasks");
clearButton.addEventListener("click", clearTasks);

