import './Buttons.css'

const Buttons = (props) => {


    return (
        <button className={props.classButton}>
            <img src={props.img} alt={props.alt}></img>
            {props.nameButton}            
        </button>
    )
}

export default Buttons