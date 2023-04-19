import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Render", props);
  }, [props.name, counter]);

  return (
    <div>
      <h1>Header</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Add
      </button>
    </div>
  );
};

export default Header;

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
// };

// Header.defaultProps = {
//   name: "Nilima",
//   age: 24,
// };
