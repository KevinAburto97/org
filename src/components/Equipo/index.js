import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import "./Equipo.css"

const Equipo = (props) => {
    //Destructuración

    const {id, titulo, colorFondo, colorDestaque} = props.datos,
        hexColor = hexToRgba(colorDestaque, 0.6),
        tiluloBackground = {backgroundColor: hexColor},
        {colaboradores, deleteColaborador, updateEquipoColor, like} = props
    
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={tiluloBackground}>
                <input 
                    className="input-color" 
                    type="color" 
                    value={colorDestaque} 
                    onChange={ (e) => updateEquipoColor(e.target.value, id)}
                />
                <h3 style={{borderBottomColor: colorDestaque}}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador key={index} datos={colaborador} colorDestaque={colorDestaque} deleteColaborador={deleteColaborador} like={like}/>)    
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;