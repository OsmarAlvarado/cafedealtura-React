import CardReport from '../CardReport/CardReport'
import Illustration1 from '../Image/Illustration 1.png'
import Illustration2 from '../Image/Illustration2.png'
import Illustration3 from '../Image/Illustration3.png'
import './CardsOne.css'


const CardsOne = () => {

    return (
        <section id='section2' className='container2'>
            <h2 className='condition'>Café con las mejores condiciones</h2>
            <div id='cards' className='row card-wrapper'>
                <CardReport img={Illustration1} nameAlt='icon-order' title='Recibe tu pedido sin preocuparte' classParagraph='content-order' parraph='Tienes cosas más importantes en la cabeza, por eso
                    con nuestra suscripción de
                    café, nunca te quedarás sin tu taza de la mañana.' />
                <CardReport img={Illustration2} nameAlt='shipping-icon' title='Envío en 24/48h' classParagraph='content-shipping' parraph='Pide tu café antes de las 12h y lo recibirás al
                    día siguiente.' />
                <CardReport img={Illustration3} nameAlt='discounts-icon' title='Descuentos y beneficios' classParagraph='content-discounts' parraph='Cada dos meses, te regalamos una bolsa de un
                    nuevo origen sorpresa, para
                    que lo descubras junto a nosotros.' />
            </div>

        </section>
    )

}

export default CardsOne