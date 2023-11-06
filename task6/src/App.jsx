import React, { useState } from 'react'
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { task, time: new Date().toLocaleTimeString(), status }])
    setStatus("Incomplete");
    setTask("");
  }
  return (
    <React.Fragment>
      <div className="container">

        <form onSubmit={handleSubmit} className='form-wrapper'>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Complete</option>
            <option>Incomplete</option>
          </select>
          <button type='submit'>Add Todo</button>
        </form>
        <div className="todo-wrapper">
          {todos.map((todo, index) => {
            return <div className={`todo ${todo.status === "Complete" ? "complete" : ""}`} key={index}>
              <p>{todo.task}</p>
              <div>
                <span>{todo.time}</span>
                <span>{todo.status}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
