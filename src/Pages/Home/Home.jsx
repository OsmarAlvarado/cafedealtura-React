import Hero from '../../Components/Hero/Hero';
import CardsOne from '../../Components/CardsOne/CardsOne';
import './Home.css';
import Accordion from '../../Components/Accordion/Accordion';
import Footer from '../../Components/Footer/Footer';
import { DataContext } from '../../Context/DataContext';
import { useContext } from 'react';
import ProductsSection from '../../Components/ProductsSection/ProductsSection'
import FeatureSection from '../../Components/FeatureSection/FeatureSection';
import NavBar from '../../Components/NavBar/NavBar';
import DesktopForm from '../../Components/DesktopForm/DesktopForm';
import IconArrow from '../../Components/Image/Icon arrow.png'

const Home = () => {
    const { data } = useContext(DataContext)

    return (
        <div className='home'>

            <Hero titleOne='De la planta a tu casa' titleTwo='El mejor café del mundo, ahora en tu casa' titleThree='Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'
                altName='coffe harvest' />
            <CardsOne />
            <ProductsSection id='section3' title='Novedades' showProducts={4} alt='arrow icon' href='#' link="Ver todos" src={IconArrow} />
            <Accordion href='#' arroIcon='arrow icon' />
            <FeatureSection titleH2='Pruébalo en nuestro coffee shop' paragraph='Visita nuestra cafetería en el centro de la ciudad para probar los granos
                    de café antes de hacer tu
                    pedido y llévate un descuento' href='#' link='Cómo llegar' icon='icon arrow' photoBar='photo bar'
            />
            <DesktopForm altPhone='icon phone' altMail='icon mail' href="#" />
            <Footer />
        </div>
    )
}

export default Home