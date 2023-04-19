import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const Todo = () => {
  const { getLocalData, setLocalData } = useLocalStorage();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setLocalData("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (todoValue) => {
    const filterTodos = todos.filter((t) => t !== todoValue);
    setLocalData("todos", JSON.stringify(filterTodos));
    setTodos(filterTodos);
  };

  useEffect(() => {
    const localTodos = getLocalData("todos");
    setTodos(JSON.parse(localTodos));
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <br />
    </div>
  );
};
