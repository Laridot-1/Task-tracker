import {useState, useEffect} from 'react'
import Tasks from './Tasks.jsx'
import Form from './Form.jsx'

const App = () => {
  const [todos, setTodos] = useState(() => {
    let tasks = localStorage.getItem("Tasks")
    if (tasks == null) return []
    return JSON.parse(tasks)
  })
  const [show, setShow] = useState(false)

  // useEffect(() => {
    // let tasks = localStorage.getItem("Tasks")
    // if (tasks !== null) setTodos(JSON.parse(tasks))
  // }, [])

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(todos))
  }, [todos])

  const toggle = () => setShow(!show)

  return (
    <div className="container">
      <header className="header">
        <h1>Task Tracker</h1>
        <button className="btn" onClick={toggle}>
          {show ? "Close" : "Add"}
        </button>
      </header>
      {show && <Form todos={todos} setTodos={setTodos} />}
      {
        todos.length > 0 ? 
          <Tasks todos={todos} setTodos={setTodos} /> :
          <h2>No Task</h2>
      }
    </div>
  )
}

export default App
