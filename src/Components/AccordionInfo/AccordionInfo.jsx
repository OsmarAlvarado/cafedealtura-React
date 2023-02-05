import './AccordionInfo.css'
import { Accordion } from 'react-bootstrap'

const AccordionInfo = (props) => {

    return (
        <Accordion.Item className='drop-down' eventKey={props.eventKey}>
            <article>
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    {props.paragraph}
                </Accordion.Body>
            </article>
        </Accordion.Item>
    )

}

export default AccordionInfo
