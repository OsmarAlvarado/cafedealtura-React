
import Hero from '../../Components/Hero/Hero';
import CardsOne from '../../Components/CardsOne/CardsOne';
import NavBar from '../../Components/NavBar/NavBar'


import './Home.css';



const Home = () => {

    return (
        <div>
            <NavBar href='#' altIcon='icon-bowl' altPhoneIcon='phone-icon' carBuyName='carBuy' />
            <Hero titleOne='De la planta a tu casa' titleTwo='El mejor café del mundo, ahora en tu casa' titleThree='Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'
            altName='coffe harvest' />
            <CardsOne />
        </div>
    )
}

export default Home