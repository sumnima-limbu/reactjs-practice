import React, { useState } from "react";

const Header = (props) => {
  console.log("PROPS", props);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Header</h1>
      <p>{counter}</p>
    </div>
  );
};

export default Header;
