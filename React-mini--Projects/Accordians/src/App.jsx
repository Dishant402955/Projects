import { useState } from "react";
import React from "react";
import data from "./data.js";

function App() {
  const Card = (props) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive((prevActive) => !prevActive);
    };

    return (
      <div className="card">
        <h1
          className="bg-amber-900 text-white px-5 py-2 cursor-pointer"
          onClick={handleClick}
        >
          {props.que}
        </h1>
        {active ? (
          <p className="text-amber-300 bg-amber-700 px-5 py-2">{props.ans}</p>
        ) : null}
      </div>
    );
  };

  const cardElements = data.map((item) => {
    return <Card {...item} />;
  });

  return <section>{cardElements}</section>;
}

export default App;
