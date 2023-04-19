import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PostHome = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((success) => {
        setTodos(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("Todo", todos);
  return (
    <div>
      {todos.slice(0, 10).map((todo) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{todo.id}</Card.Title>
              <Card.Text>{todo.title}</Card.Text>
              <Link to={`/posts/${todo.id}`}>
                <Button variant="primary">View More</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PostHome;
