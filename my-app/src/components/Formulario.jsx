import React from 'react'

const Formulario = () => {
  return (
    <>
        <h3>Agregar TODO</h3>
        <form>
            <input 
            type="text" 
            className='form-control mb-2'
            name='nombre'
            placeholder='ingrese todo nombre'
            />
            <textarea 
            placeholder='form-control mb-2'
            name='descripcion'
            />
        </form>
    </>
  )
}

export default Formulario