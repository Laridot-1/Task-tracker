import {useState} from 'react'

const Form = ({todos, setTodos}) => {
  const [taskInput, setTaskInput] = useState("")
  const [timeInput, setTimeInput] = useState("")
  const [reminderInput, setReminderInput] = useState(false)

  const changeTask = e => setTaskInput(e.target.value)
  const changeTime = e => setTimeInput(e.target.value)
  const changeReminder = e => setReminderInput(e.target.checked)
  const saveTask = e => {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      task: taskInput,
      time: timeInput,
      reminder: reminderInput
    }
    if (taskInput && timeInput) {
      setTodos([...todos, newTodo])
      setTaskInput("")
      setTimeInput("")
      setReminderInput(false)
    }
    return
  }


  return (
    <form onSubmit={saveTask} className="form-control">
      <label htmlFor="task">
        <span>Task</span>
        <input id="task" type="text" value={taskInput} onChange={changeTask} />
      </label>
      <label htmlFor="time">
        <span>Day & Time</span>
        <input id="time" type="text" value={timeInput} onChange={changeTime} />
      </label>
      <label htmlFor="reminder">
        <span>Set Reminder</span>
        <input id="reminder" type="checkbox" checked={reminderInput} onChange={changeReminder} />
      </label>
      <button type="submit" className="btn">Save Task</button>
    </form>
  )
}

export default Form
