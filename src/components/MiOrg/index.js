//import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //[nombreEstado, funcionQueVaAActualizarEstado] = useState(ValorInicial)

    /*const [mostrar, manejarMostrar] = useState(true)
    const showMyOrg = () => {
        manejarMostrar(!mostrar)
    }*/

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeStateForm}/>
    </section>
}

export default MiOrg;