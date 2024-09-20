export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
        <label htmlFor="">
          <input type="checkbox" checked={todo.completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          />
          {todo.title}
        </label>
      <button 
      onClick={() => deleteTodo(id)}
      className="btn-delete">Delete</button>
    </li>
    )
}