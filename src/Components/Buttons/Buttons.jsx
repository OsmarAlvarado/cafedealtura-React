import './Buttons.css'

const Buttons = (props) => {


    return (
        <button className={props.classButton}>{props.nameButton}</button>
    )
}

export default Buttons