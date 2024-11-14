import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="grid mt-4 text-center place-content-center">
      <h1 className="text-3xl font-bold">Todo Application</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
