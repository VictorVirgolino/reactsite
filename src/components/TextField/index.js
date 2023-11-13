import './index.css'

const TextField = (props) => {

    const placeholder = `${props.placeholder}...`
    return (
        <div className='textfield'>
            <label>{props.label}</label>
            <input placeholder={placeholder}></input>
        </div>
    )
}

export default TextField