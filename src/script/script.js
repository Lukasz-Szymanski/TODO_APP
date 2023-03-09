// Define the task object constructor

class Task {
    constructor(description, date, time) {
        this.description = description;
        this.completed = false;
        this.date = date;
        this.time = time;
    }
}


// Define an array to store the tasks 

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks();




// Function to add a new task to the list 

function addTask() {
    const taskInput = document.getElementById("task-input").value;
    const dateInput = document.getElementById("date-input").value;
    const timeInput = document.getElementById("time-input").value;
    document.getElementById("task-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("time-input").value = "";
    const newTask = new Task(taskInput, dateInput, timeInput);
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}





// Function to display the current tasks 

function displayTasks() {
    let tasksList = "";
    for (let i = 0; i < tasks.length; i++) {
        tasksList += `<li>${tasks[i].description} ${tasks[i].date} ${tasks[i].time}</li>`;
    }
    const taskListElement = document.getElementById("task-list");
    if (taskListElement) {
        taskListElement.innerHTML = tasksList;
    }
}



// Function to retrieve the tasks from localStorage

function retrieveTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    displayTasks();
}

// Event listener to handle the form submission 

document.getElementById("add-task").addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});

// Call the retrieveTasks function when the page loads

window.onload = retrieveTasks;


// clear tasks 

function clearTasks() {
    tasks = [];
    displayTasks();
    localStorage.removeItem("tasks");
}
const clearButton = document.getElementById("clear-tasks");
clearButton.addEventListener("click", clearTasks);
