import "./Campo.css"
const Campo = (props) =>{
    const handleChange = (e) => {
        props.updateValue(e.target.value)
    }

    const {type = "text"} = props

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={handleChange}
            type={type}
            />
    </div>
}

export default Campo;