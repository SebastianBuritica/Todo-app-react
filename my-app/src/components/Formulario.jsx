import React, { useState } from 'react'

const Formulario = () => {

    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: 'false'
    }

    const [todo, setTodo] = useState(initialState)

    const {nombre, descripcion, estado, prioridad} = todo

    const handleSubmit = e => {
        e.preventDefault()
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
                Default checkbox
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