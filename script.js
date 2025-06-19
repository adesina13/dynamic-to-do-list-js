document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save during load
    }

    function addTask(taskText = "", save = true) {
        if (!taskText) taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Enter a task");
            return;
        }

        const taskTextLi = document.createElement('li')
        taskTextLi.textContent = taskText

        const removeBtn = document.createElement('button')
        removeBtn.textContent = "Remove"
        removeBtn.classList.add("remove-btn")

        removeBtn.addEventListener('click', function () {
            taskList.removeChild(taskTextLi)
            // Remove from localStorage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        })

        taskTextLi.appendChild(removeBtn)
        taskList.appendChild(taskTextLi)

        taskInput.value = ""

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    addButton.addEventListener('click', () => addTask())

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask()
        }
    })

    loadTasks() // ✅ Load tasks on DOM ready
})
