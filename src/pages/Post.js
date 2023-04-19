import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const Post = () => {
  let { postId } = useParams();
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${postId}`)
      .then((success) => {
        setTodo(success.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(todo);
  return (
    <div key={todo.id}>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{todo.id}</Card.Title>
            <Card.Text>{todo.title}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Post;
