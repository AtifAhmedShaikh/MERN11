import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodo();
  }, []);
  const getAllTodo = async () => {
    const response = await axios.get("http://localhost:5000/todo");
    setTodos(response.data);
  };

  return (
    <React.Fragment>
      <button onClick={getAllTodo}>Get Todo</button>
      {todos.map((todoItem, index) => (
        <div key={index}>
          Text: {todoItem.text}
          &nbsp; status: {JSON.stringify(todoItem.status)}
          <button
            onClick={async () => {
              const id = todoItem._id;
              const updatedStatus = !todoItem.status;
              await axios.patch("http://localhost:5000/todo", {
                id,
                status: updatedStatus,
              });
              getAllTodo();
            }}
          >
            Change Status{" "}
          </button>
        </div>
      ))}
          <Link to={'/form'}>
            <button>submit form</button>
          </Link>
    </React.Fragment>
  );
}

export default App;
