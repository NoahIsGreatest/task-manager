
const addTask = document.getElementById('addTask')
const container = document.getElementById('container')

const info = document.getElementById('info')
const Tasks = document.getElementById('tasks')

let busy = false

if (addTask) {
  addTask.addEventListener('click', () => {
    if (busy) return;
    busy = true
    const name = document.createElement('input')
    const button = document.createElement('button')

    name.type = "text"
    name.id = "name"

    info.appendChild(name)
    info.appendChild(button)
    button.textContent = "Create To-do"
    button.id = "createTask"
    
    button.addEventListener('click', () => {
      busy = false

      let Name = name.value
      if (!Name) {

        const Msg = document.createElement('p')
        Msg.textContent = "Create a Name For the Task"
        Msg.style.color = "red"
        container.appendChild(Msg)
        setTimeout(() => {
          Msg.remove();
        }, 5000)
        return
      }
      const TaskContainer = document.createElement('div')
      const TaskName = document.createElement('h3')
      const DeleteButton = document.createElement('button')
      const CheckBox = document.createElement('input')

      TaskName.textContent = Name
      TaskContainer.appendChild(TaskName)

      TaskContainer.className = "Task"
      Tasks.appendChild(TaskContainer)

      DeleteButton.textContent = "Delete"
      DeleteButton.className = "Delete"

      CheckBox.type = "checkbox"
      CheckBox.className = "check"

      CheckBox.addEventListener('change', (event) => {
        if (event.target.checked) {
          TaskName.style = "text-decoration: line-through 3px;"
        } else if (!event.target.checked) {
          TaskName.style = "text-decoration: none;"
        }
      })
      TaskContainer.appendChild(CheckBox)
      TaskContainer.appendChild(DeleteButton)
      DeleteButton.addEventListener('click', () => {
        TaskContainer.remove();
      })
      
    })

  })

}



