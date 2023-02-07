
import Hero from '../../Components/Hero/Hero';
import CardsOne from '../../Components/CardsOne/CardsOne';
import NavBar from '../../Components/NavBar/NavBar'

import './Home.css';
import Accordion from '../../Components/Accordion/Accordion';
import FeatureSection from '../../Components/FeatureSection/FeatureSection';
import Footer from '../../Components/Footer/Footer';




const Home = () => {

    return (
        <div>
            <NavBar href='#' altIcon='icon-bowl' altPhoneIcon='phone-icon' carBuyName='carBuy' />
            <Hero titleOne='De la planta a tu casa' titleTwo='El mejor café del mundo, ahora en tu casa' titleThree='Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'
                altName='coffe harvest' />
            <CardsOne />
            <Accordion href='#' arroIcon='arrow icon' />
            <FeatureSection titleH2='Pruébalo en nuestro coffee shop' paragraph='Visita nuestra cafetería en el centro de la ciudad para probar los granos
                    de café antes de hacer tu
                    pedido y llévate un descuento' href='#' link='Cómo llegar' icon='icon arrow' photoBar='photo bar' />
            <Footer />

        </div>
    )
}

export default Home