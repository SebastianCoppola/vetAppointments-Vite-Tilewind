import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
    const [pacientes, setPacientes] = useState([])
    const [pacienteEditar, setPacienteEditar] = useState({})
    const [firstRender, setFirstRender] = useState(true)
    
    useEffect(()=>{
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLS);
        setFirstRender(false)
    }, [])

    useEffect(()=>{
        if(!firstRender){
            localStorage.setItem('pacientes',JSON.stringify(pacientes));
        }
    }, [pacientes])

    const eliminarPaciente = (idPaciente) => {
        let pacientesActualizados = pacientes.filter(it => it.id !== idPaciente)
        setPacientes(pacientesActualizados)
    }

    return (
        <div className="container mx-auto mt-20 max-w-7xl">
            <Header/>
            <div className="mt-12 md:flex px-15">
                <Formulario 
                    pacientes={pacientes} 
                    setPacientes={setPacientes} 
                    pacienteEditar={pacienteEditar}
                    setPacienteEditar={setPacienteEditar}
                />
                <ListadoPacientes 
                    pacientes={pacientes} 
                    setPacienteEditar={setPacienteEditar} 
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    )
}

export default App
