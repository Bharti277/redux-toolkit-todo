import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editText: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.newText }
          : item
      );
    },
  },
});

export const { addTodo, removeTodo, editText } = todoSlice.actions;
export default todoSlice.reducer;
