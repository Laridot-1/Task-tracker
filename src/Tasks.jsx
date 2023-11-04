import Task from './Task.jsx'

const Tasks = ({todos, setTodos}) => {
  return (
    <section className="tasks">
      {
        todos.map(todo => {
          return <Task key={todo.id} todo={todo} todos={todos}setTodos={setTodos} />
        })
      }
    </section>
  )
}

export default Tasks
