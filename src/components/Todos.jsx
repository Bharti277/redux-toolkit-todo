import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editText } from "../redux/todoSlice";
import EditableForm from "./EditableForm";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="mt-4 text-2xl font-bold">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <EditableForm todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
