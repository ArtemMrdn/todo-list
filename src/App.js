import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearTodosHandler = () => {
    setTodos([]);
  };

  return (
    <div className='App'>
      <div className='card'>
        <div className='card-content'>
          <TodoForm addTodo={addTodoHandler} />
          <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
          <TodosActions clearTodos={clearTodosHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
