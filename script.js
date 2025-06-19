document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById('add-task-btn')
    const taskInput  = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function renderTask(taskText) {
        const taskTextLi = document.createElement('li')
        taskTextLi.textContent = taskText

        const removeBtn = document.createElement('button')
        removeBtn.textContent = "Remove"
        removeBtn.classList.add("remove-btn")

        removeBtn.addEventListener('click', function(){
            taskList.removeChild(taskTextLi)
            tasks = tasks.filter(task => task !== taskText)
            saveTasks()
        })

        taskTextLi.appendChild(removeBtn)
        taskList.appendChild(taskTextLi)
    }

    function addTask(){
        let taskText = taskInput.value.trim()
        if (taskText === ""){
            alert("Enter a task")
        } else {
            tasks.push(taskText)
            saveTasks()
            renderTask(taskText)
            taskInput.value = ""
        }
    }

    addButton.addEventListener('click', addTask)

    taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            addTask()
        }
    })

    // Load tasks on page load
    tasks.forEach(renderTask)
})

