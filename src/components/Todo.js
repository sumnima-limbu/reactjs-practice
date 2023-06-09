import "../todo.css";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function formSubmit() {
    setTodos((prevState) => [...prevState, todo]);
    setTodo("");
  }

  function deleteMe(value) {
    const filterTodos = todos.filter((element) => element !== value);
    setTodos(filterTodos);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todo-wrapper">
          <h1>Todo List</h1>
          <div className="form">
            <input value={todo} onChange={handleChange} type="text" id="todo" />
            <button onClick={formSubmit} id="addTask">
              Add Task
            </button>
          </div>
          <div className="lists">
            {todos.map((element, i) => {
              return (
                <div key={i} id="item">
                  <p>{element}</p>
                  <button onClick={() => deleteMe(element)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
