import React from 'react'

const Paciente = (props) => {
    const {paciente, setPacienteEditar, eliminarPaciente} = props

    const handleEditar = () => {
        setPacienteEditar(paciente)
    }
    const handleEliminar = () => {
        let respuesta = confirm('¿Deseas eliminar el paciente?')
        if(respuesta){
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="bg-white shoadow-md mb-5 px-5 py-5 rounded.xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{paciente && paciente.nombreMascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{paciente && paciente.nombrePropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{paciente && paciente.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{paciente && paciente.alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">{paciente && paciente.sintomas}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button
                    type='button'
                    onClick={handleEditar}
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bolde uppercase rounded'
                >Editar</button>
                <button
                    type='button'
                    onClick={handleEliminar}
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bolde uppercase rounded'
                >Eliminar</button>
            </div>
        </div>
  )
}

export default Paciente