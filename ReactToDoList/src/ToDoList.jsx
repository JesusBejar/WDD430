import { ToDoItem } from "./ToDoItem"

export function ToDoList( todos, toggleTodo, deleteTodo ) {
    return (
        <ul class="list">
        {todos.length == 0 && "No to-dos yet"}
        {todos.map(todo => {
          return (
            <ToDoItem 
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        )})}
      </ul>
    )
}