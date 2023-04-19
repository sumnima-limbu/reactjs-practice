import React from "react";
import Component2 from "./Component2";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "../../redux/appSlice";

const Component1 = (props) => {
  const counter = useSelector((state) => state.app.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Component 1</h1>
      <button onClick={() => dispatch(increment())}>Counter: {counter}</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>
        Counter By Amount {counter}
      </button>
      <Component2 />
    </div>
  );
};

export default Component1;
