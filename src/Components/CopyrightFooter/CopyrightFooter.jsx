import './CopyrightFooter.css'

const CopyrightFooter = (props) => {

    return (
        <div className='reserved'>
            <a href={props.href} >Todos los derechos reservados - Café de Altura SL - 2022</a>
        </div>
    )
}

export default CopyrightFooter