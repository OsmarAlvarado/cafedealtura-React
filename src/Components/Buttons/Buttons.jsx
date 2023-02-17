import './Buttons.css'

const Buttons = (props) => {

    const { click } = props

    const clicked = () => {
        if (click) {
            click()
        } else {
            return
        }
    }

    return (
        <button className={props.classButton} onClick={clicked}>
            <img src={props.img} alt={props.alt}></img>
            {props.nameButton}
        </button>
    )
}

export default Buttons