document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById('add-task-btn')
    const taskInput  = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')


    function addTask (){
        let taskText = taskInput.value.trim()
        if (taskText === ""){
            alert("Enter a task")
        }else{
            const taskTextLi = document.createElement('li')
            taskTextLi.textContent = taskText

            const removeBtn = document.createElement('button')
            removeBtn.textContent = "remove"
            removeBtn.classList.add("remove-btn")

            removeBtn.addEventListener('click', function(){
                taskList.removeChild(taskTextLi)
            })

            taskTextLi.appendChild(removeBtn)
            taskList.appendChild(taskTextLi)
        }
    }

    addButton.addEventListener('click', addTask)

    taskInput.addEventListener('keypress', function(event){
        if (event.key == 'Enter'){
            addTask()
        }
    })
})