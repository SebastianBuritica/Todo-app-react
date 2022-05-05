import React, { useState } from 'react'
import Formulario from './Formulario'
import Todo from './Todo'

const TodoList = () => {
  
    const [todos, setTodos] = useState([])
  
    const agregarTodo = (todo) => {
        console.log(todo)
        setTodos((old) => [...old, todo])
    }

    return (
    <>
        <Formulario agregarTodo={agregarTodo} />
        <ul className='list-group list-group-numbered'>
        {todos.map((item) => (
                <Todo key={item.id} todo={item} />
            ))}
        </ul>
    </>
  )
}

export default TodoList