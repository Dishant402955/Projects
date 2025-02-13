import { useState } from "react";
import React from "react";

function App() {
  const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      setTodos((todos) =>
        todos.concat({
          text: input,
          id: Math.floor(Math.random() * 10000),
        })
      );
      setInput("");
    };

    const removeTodo = (id) =>
      setTodos((todos) => todos.filter((t) => t.id !== id));

    return (
      <div className="flex flex-col justify-center items-center mt-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New Todo"
            className="border-gray-800 border-2 px-2 py-0.5 rounded-xl m-5"
          />
        </form>

        <ul className="">
          {todos.map(({ text, id }) => (
            <li
              key={id}
              className="w-[300px] flex justify-between m-0.5 border-2 rounded-xl p-1"
            >
              <span className="ml-1">{text}</span>
              <button
                className="cursor-pointer bg-black text-white px-3 py-0.5 rounded-xl"
                onClick={() => removeTodo(id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
