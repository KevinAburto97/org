import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, updateNombre] = useState(""),
        [puesto, updatePuesto] = useState(""),
        [foto, updateFoto] = useState(""),
        [equipo, updateEquipo] = useState(""),
        {addColaborador, createEquipo, equipos} = props,
        [titulo, updateTitulo] = useState(""),
        [color, updateColor] = useState("")


    const manejarEnvio = (e) => {
        e.preventDefault()

        let formData = {
            nombre,
            puesto,
            foto,
            equipo
        }

        addColaborador(formData)
    }

    const manejarNewEquipo = (e) => {
        e.preventDefault()
        createEquipo({titulo, colorDestaque: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} updateValue={updateNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} updateValue={updatePuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} updateValue={updateFoto}/>
            <ListaOpciones valor={equipo} updateEquipo={updateEquipo} equipos={equipos}/>
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNewEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} updateValue={updateTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} updateValue={updateColor} type="color"/>
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario