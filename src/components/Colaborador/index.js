import "./Colaborador.css"
import {TiDelete} from "react-icons/ti"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const {id, nombre, puesto, foto, equipo, fav} = props.datos,
    {colorDestaque, deleteColaborador, like} = props

    const handleLike = (e) => {
        console.log(e)
        e.currentTarget.classList.toggle("like-clicked")
    }
    
    return <div className="colaborador">
        <TiDelete className="eliminar" onClick={() => deleteColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorDestaque}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" className="like like-clicked" onClick={(e) => {handleLike(e); like(id);}}/> : <AiOutlineHeart className="like like-clicked" onClick={(e) => {handleLike(e); like(id)}}/> }
        </div>
    </div>
}

export default Colaborador;