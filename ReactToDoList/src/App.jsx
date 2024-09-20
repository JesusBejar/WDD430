import { useEffect, useState } from "react"
import { NewToDoForm } from "./NewToDoForm"
import "./styles.css"
import { ToDoList } from "./ToDoList"


export default function App() {
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addToDo(title) {
      setToDos(currentTodos => {
        return [
          ...currentTodos, 
          { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }


  function toggleToDo(id, completed) {
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id){
          return { ...todo, completed }
        }

        return todo
      })

    })

  }

  function deleteToDo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return ( 
    <>
    < NewToDoForm onSubmit={addToDo}/>
      <h1 className="header">To-do list</h1>
    < ToDoList todos={todos}
    toggleToDo={toggleToDo}
    deleteToDo={deleteToDo}
    />
    </>
  )
}
