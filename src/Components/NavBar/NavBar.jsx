import { Link } from 'react-router-dom'
import Buttons from '../Buttons/Buttons'
import IconTaza from '../Image/icon taza.png'
import IconPhone from '../Image/icon phone.png'
import CarBuy from '../Image/Group car.png'

import './NavBar.css'



const NavBar = (props) => {

    return (

        <header className='row'>
            <article className='init'>
                <Link to={'/'} id='link'>
                    cafedealtura.com
                </Link>
                <article className='cup'>
                    <img src={IconTaza} alt={props.altIcon} className='icon' />
                </article>
            </article>

            <article className='menu'>

                <Link to={'/Store'} className='store'>
                    Tienda
                </Link>
                <a href={props.href} className='Sus'>Suscripcion</a>
                <a href={props.href} className='business'>Para empresas</a>
                <a href={props.href} className='Us'>Sobre nosotros</a>
                <a href={props.href} className='cont'>Contacto</a>
            </article>

            <article className='col contact'>
                <div className='row service'>
                    <article className='col link-button'>
                        <picture>
                            <img src={IconPhone} alt={props.altPhoneIcon} id='phone' />
                        </picture>
                        <a href={props.href} className='number'>+34 919 49 05 18</a>
                    </article>

                    <article className='col button'>
                        <Buttons classButton='btn-star' nameButton='Iniciar Sesión' />
                    </article>
                </div>
            </article>

            <article className='col-car'>
                <div>
                    <img src={CarBuy} id='' alt={props.carBuyName} />
                </div>
            </article>
        </header>
    )


}

export default NavBar