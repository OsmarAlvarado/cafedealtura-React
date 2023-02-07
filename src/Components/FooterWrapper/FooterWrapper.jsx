import { Link } from 'react-router-dom'
import Buttons from '../Buttons/Buttons'
import IconTaza from '../Image/icon taza.png'
import IconPhone from '../Image/icon phone.png'
import MailWhite from '../Image/mail white.png'
import './FooterWrapper.css'


const FooterWrapper = (props) => {

    return (
        <div className='fwrapper'>
            <div className='bowl'>
                <Link to={'/'} id='link'>
                    cafedealtura.com
                </Link>
                <img src={IconTaza} alt={props.iconBowl} />
            </div>

            <div className='row help'>
                <article className='col you'>
                    <h3>Te ayudamos en</h3>
                    <Buttons img={IconPhone} classButton='buttonA' alt='phone icon' nameButton='+34 919 49 05 18' />
                    <Buttons img={MailWhite} classButton='buttonB' alt='mail icon' nameButton='hola@cafedealtura.com' />
                </article>

                <article className='col alls'>
                    <Link to={'/Store'}>
                        Tienda
                    </Link>
                    <a href={props.href} >Suscripcion</a>
                    <a href={props.href} >Para empresas</a>
                    <a href={props.href} >Sobre nosotros</a>
                    <a href={props.href} >Contacto</a>
                </article>

                <article className='col cookies'>
                    <a href={props.href} >Política de privacidad</a>
                    <a href={props.href} >Política de cookies</a>
                    <a href={props.href} >Contacto</a>
                </article>
            </div>            
        </div>
    )
}

export default FooterWrapper