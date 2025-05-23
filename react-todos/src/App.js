import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddNewTodo, setShowAddNewTodo] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User One",
    },
  ]);

  const addTodo = (rowAssigned, rowDescription) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber,
      rowDescription,
      rowAssigned,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (rowNumber) => {
    let filtered = todos.filter((todo) => todo.rowNumber !== rowNumber);
    setTodos(filtered);
  };

  const toggleTodo = () => {
    setShowAddNewTodo(!showAddNewTodo);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable
            todos={todos}
            removeTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
          {showAddNewTodo && <NewTodoForm submitTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
