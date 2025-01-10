import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Text cannot be empty!");
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="mt-8 space-x-3">
      <input
        className="px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500"
        type="text"
        placeholder="Type here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}

export default AddTodo;
