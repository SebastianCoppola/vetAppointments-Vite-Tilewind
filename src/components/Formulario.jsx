import React, { useState } from 'react'
import { useEffect } from 'react'
import Error from './Error'

const Formulario = (props) => {
    const {pacientes, setPacientes, pacienteEditar, setPacienteEditar} = props
    const [nombreMascota, setNombreMascota] = useState('')
    const [nombrePropietario, setNombrePropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(pacienteEditar){
            setNombreMascota(pacienteEditar.nombreMascota)
            setNombrePropietario(pacienteEditar.nombrePropietario)
            setEmail(pacienteEditar.email)
            setAlta(pacienteEditar.alta)
            setSintomas(pacienteEditar.sintomas)
        }
    },[pacienteEditar])

    const generarId = () => {
        let random = Math.random().toString(36).substring(2)
        let fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //Error?
        if([nombreMascota, nombrePropietario, email, alta, sintomas].includes('')){
            setError(true)
            return
        }
        setError(false)
        
        //NewPaciente:
        let paciente = {nombreMascota, nombrePropietario, email, alta, sintomas}
        if(pacienteEditar.id){
            //Editando registro
            paciente.id = pacienteEditar.id
            let pacientesActualizados = pacientes.map(it => it.id === paciente.id ? paciente : it)
            setPacientes(pacientesActualizados)
        }else{
            //Nuevo registro
            paciente.id = generarId() 
            setPacientes([paciente, ...pacientes])
        }
        //Reinicio el Formulario
        setNombreMascota('')
        setNombrePropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
        setPacienteEditar({})
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {''} 
                <span className="text-indigo-600 font-bold ">
                    Administralos
                </span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rouded-lg py-10 px-5 mt-10 mb-10"
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
                        Nombre Mascota
                    </label>
                    <input
                        value={nombreMascota}
                        onChange={(e)=>setNombreMascota(e.target.value)}
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rpunded-md"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">
                        Nombre Propietario
                    </label>
                    <input
                        value={nombrePropietario}
                        onChange={(e)=>setNombrePropietario(e.target.value)}
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rpunded-md"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        id="email"
                        type="text"
                        placeholder="Email contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rpunded-md"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
                        Alta
                    </label>
                    <input
                        value={alta}
                        onChange={(e)=>setAlta(e.target.value)}
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rpunded-md"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
                        Síntomas
                    </label>
                    <textarea
                        value={sintomas}
                        onChange={(e)=>setSintomas(e.target.value)}
                        id="sintomas"
                        type="date"
                        placeholder='Describe los síntomas'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rpunded-md"
                    />
                </div>
                <input
                    type='submit'
                    // onClick={handleSubmit}
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold
                    hover:bg-indigo-700 cursor-pointer transition-colors'
                    value={pacienteEditar.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario