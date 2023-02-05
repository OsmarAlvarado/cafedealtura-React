import { Accordion } from 'react-bootstrap'
import AccordionInfo from '../AccordionInfo/AccordionInfo'
import ArrowWhite from '../Image/arrow white.png'

import './Accordion.css'

const Accordions = (props) => {

    return (
        <Accordion id='section4'>
            <h2>Preguntas frecuentes</h2>
            <br />
            <AccordionInfo eventKey='0' title='¿Cómo hago el pedido?' paragraph='Selecciona el café que desees probar y completa el
                    proceso de
                    compra. Si lo prefieres, te
                    preguntaremos
                    cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.' />
            <br />
            <AccordionInfo eventKey='1' title='¿Por qué los precios son
                    tan bajos?' paragraph='Viajamos constantemente para encontrar los mejores
                    granos y a
                    los
                    agricultores más exigentes.
                    Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de
                    café,
                    sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de
                    los
                    granos de café recibe el mayor beneficio posible.' />
            <br />
            <AccordionInfo eventKey='2' title='¿Es posible enviar café a
                    mi oficina?'/>
            <br />
            {/* <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item> */}
            <article className='doubts'>
                <a href={props.href} >Resolvemos tus dudas</a>
                <img src={ArrowWhite} alt={props.arroIcon} />
            </article>
        </Accordion>
    )
}

export default Accordions