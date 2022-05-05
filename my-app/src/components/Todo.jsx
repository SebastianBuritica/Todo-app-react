import React from 'react'

const Todo = ({ todo }) => {
  
    const {nombre, descripcion, estado, prioridad} = todo
  
    return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
        <div className="fw-bold">
          {nombre} ({estado ? 'Finalizado' : 'Pendiente'})
        </div>
      <p>{descripcion}</p>
    </div>
    <span className="badge bg-primary rounded-pill">
        {prioridad && 'Prioritario'}
    </span>
    </li>
    )
 }

export default Todo