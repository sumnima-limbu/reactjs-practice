import React from "react";
import { changeName } from "../../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

const Component4 = () => {
  const { counter, name } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Component 4</h4>
      <div>
        Counter: {counter}
        <br />
        Name: {name}
        <br />
        <button onClick={() => dispatch(changeName())}>Change Name </button>
      </div>
    </div>
  );
};

export default Component4;
