import {useState} from "react"

const Task = ({todo, todos, setTodos}) => {
  const {task, time, reminder, id} = todo

  const changeReminder = (id) => {
    let changedRem = todos.map(todo => {
      if (todo.id === id) todo.reminder = !todo.reminder;
      return todo
    })
    setTodos(changedRem)
  }
  const removeTask = (id) => {
    let newTasks = todos.filter(todo => todo.id !== id)
    setTodos(newTasks)
  }

  return (
    <article className="task" style={{borderLeft: reminder ? "4px solid green" : "none"}} onDoubleClick={() => changeReminder(id)}>
      <div>
        <h3>{task}</h3>
        <h4>{time}</h4>
      </div>
      <button onClick={() => removeTask(id)}>x</button>
    </article>
  )
}

export default Task
