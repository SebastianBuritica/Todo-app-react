import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({agregarTodo}) => {

    const initialState = {
        nombre: 'todo 1',
        descripcion: 'descripcion 1',
        estado: 'pendiente',
        prioridad: 'false'
    }

    const [todo, setTodo] = useState(initialState)

    const {nombre, descripcion, estado, prioridad} = todo

    const handleSubmit = e => {
        e.preventDefault()
        if(!nombre.trim()){
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',
              })
            return
        }
        if(!descripcion.trim()) {
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',
              })
              return
        }

        Swal.fire({
            title: 'Exito',
            text: 'Tarea agregada',
            icon: 'success',
          })

          agregarTodo({
              nombre: nombre,
              descripcion: descripcion,
              estado: estado === 'pendiente' ? false : true,
              prioridad: prioridad,
              id: uuidv4()
          })

          setTodo(initialState)
    }

    const handleChange = e => {
        const {name, value, checked, type} = e.target

        setTodo((old) => ({
            ...old,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

  return (
    <>
        <h3>Agregar TODO</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className='form-control mb-2'
            name='nombre'
            placeholder='ingrese todo nombre'
            value={nombre}
            onChange={handleChange}
            />
            
            <textarea
            className='form-control mb-2' 
            placeholder='ingrese descripcion'
            name='descripcion'
            value={descripcion}
            onChange={handleChange}
            />

            <select 
            name="estado" 
            className='form-control mb-2' 
            value={estado}
            onChange={handleChange}
            >
                <option value="pendiente">pendiente</option>
                <option value="completado">completado</option>
            </select>

            <div className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="flexCheckDefault" 
            name='prioridad'
            checked={prioridad}
            onChange={handleChange}
            />
            
            <label 
            className="form-check-label" 
            htmlFor="flexCheckDefault">
                Prioritario
            </label>
            </div>

            <button type='submit' className='btn btn-primary'>
                Agregar
            </button>

        </form>
    </>
  )
}

export default Formulario