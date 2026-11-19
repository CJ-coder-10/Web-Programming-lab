
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}"
                  onclick="completeTask(${index})">
                ${task.name}
            </span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() !== "") {
        tasks.push({ name: input.value, completed: false });
        input.value = "";
        saveTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();
