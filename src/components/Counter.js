import "../App.css";
import { useState } from "react";

// const names = ["Arjun", "Ram", "Hari", "Bhuwan"];
function Counter() {
  const [name, setName] = useState("Sumnima");
  const [counter, setCounter] = useState(0);

  function clickme() {
    setName("Sawarloon");
  }

  const increase = () => {
    console.log("+");
    setCounter((prevState) => prevState + 1);
  };

  const decrease = () => {
    console.log("-");
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <h1>Hello World {name}</h1>
      <button onClick={clickme}>Click me</button>
      <h2>Counter: {counter}</h2>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>

      {/* {names.map((element, i) => {
        return <p key={i}>{element}</p>;
      })} */}
    </div>
  );
}

export default Counter;
