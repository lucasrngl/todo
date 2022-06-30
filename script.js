const input = document.querySelector("input");

function getTask() {
    const task = input.value;
    if (window.event.keyCode == 13 && task.length > 0) {
        input.value = "";
        createTask(task);
    }
}

function createTask(input) {
    const main = document.querySelector("main");
    const element = document.createElement("div");
    element.classList.add("task")
    element.innerHTML = `<p>${input}</p>
        <button onclick="del(this.parentNode)">
            <img src="assets/trash.svg" alt="Delete button">
        </button>`;
    main.appendChild(element);
}

function del(task) {
    const element = task;
    element.remove();
}