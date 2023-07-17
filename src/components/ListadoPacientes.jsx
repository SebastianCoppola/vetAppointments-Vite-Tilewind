import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = (props) => {
    const {pacientes, setPacienteEditar, eliminarPaciente} = props

    return (
        <div className="md:w-1/2 lg:w-3/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Listado de Pacientes
            </h2>
            <p className="font-black mt-5 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">
                    Pacientes y citas
                </span>
            </p>
            <div className="mt-10 md:h-screen overflow-y-auto">
                {pacientes && pacientes.length ? 
                    pacientes.map((paciente)=>(
                        <Paciente key={paciente.id} paciente={paciente} setPacienteEditar={setPacienteEditar} eliminarPaciente={eliminarPaciente}/>
                    ))
                    :
                    <div className='text-center mt-10'>
                        No hay pacientes registrados. 
                    </div>
                }
            </div>
        </div>
    )
}

export default ListadoPacientes