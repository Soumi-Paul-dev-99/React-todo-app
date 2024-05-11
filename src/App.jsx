import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./app.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="Item-container">
          <TodoItem />
          <TodoItem />
        </div>
      </center>
    </>
  );
}

export default App;
