import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="wrapper">
      <span className="display">{count}</span>
      <div className="buttons">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
