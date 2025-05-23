import TodoRowItem from "./TodoRowItem";

function TodoTable({ todos, removeTodo, toggleTodo }) {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assigned</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoRowItem
              key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              rowDescription={todo.rowDescription}
              rowAssigned={todo.rowAssigned}
              removeTodo={removeTodo}
            />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={toggleTodo}>
        Add new todo
      </button>
    </div>
  );
}

export default TodoTable;
