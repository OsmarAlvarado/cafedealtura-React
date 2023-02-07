import { Accordion } from 'react-bootstrap'
import AccordionInfo from '../AccordionInfo/AccordionInfo'
import ArrowWhite from '../Image/arrow white.png'

import './Accordion.css'

const Accordions = (props) => {

    return (
        <Accordion id='section4'>
            <h2>Preguntas frecuentes</h2>
            
            <AccordionInfo eventKey='0' title='¿Cómo hago el pedido?' paragraph='Selecciona el café que desees probar y completa el
                    proceso de
                    compra. Si lo prefieres, te
                    preguntaremos
                    cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'
            />

            <AccordionInfo eventKey='1' title='¿Por qué los precios son
                    tan bajos?' paragraph='Viajamos constantemente para encontrar los mejores
                    granos y a
                    los
                    agricultores más exigentes.
                    Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de
                    café,
                    sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de
                    los
                    granos de café recibe el mayor beneficio posible.'
            />

            <AccordionInfo eventKey='2' title='¿Es posible enviar café a
                    mi oficina?'
            />

            <article className='doubts'>
                <a href={props.href} >Resolvemos tus dudas</a>
                <img src={ArrowWhite} alt={props.arroIcon} />
            </article>
        </Accordion>
    )
}

export default Accordions