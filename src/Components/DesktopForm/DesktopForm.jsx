import './DesktopForm.css'
import IconTlfn from '../Image/icon tlfn.png'
import IconMail from '../Image/Icon mail.png'
import Form from '../Form/Form'


const DesktopForm = (props) => {

    return (
        <section id='section6'>
            <div className='row' id='contact'>
                <div className='col support'>
                    <article className='header'>
                        <h3>Entra en contacto con nosotros</h3>
                        <p>Si tienes dudas, ponte en contacto con nosotros a través del
                            formulario y te responderemos lo
                            antes posible</p>
                    </article>
                    <article className='enter'>
                        <p>También puedes ponerte en contacto con nostros en nuestra dirección o
                            a través del teléfono de la
                            tienda.</p>
                        <article className='address'>
                            <p className='street'>742 Evergreen Terrace</p>
                            <p className='postal'>Springfield, OR 1234</p>
                        </article>

                        <article className='details'>
                            <article className='detail'>
                                <img src={IconTlfn} alt={props.altPhone} />
                                <p className='cel'>+1 (555) 123-4567</p>
                            </article>
                            <article className='detail'>
                                <img src={IconMail} alt={props.altMail} />
                                <p className='tray'>support@example.com</p>
                            </article>
                        </article>
                        <p className='job'>¿Buscas un trabajo? <a href={props.href}><b> Ver nuestras
                            ofertas.</b></a></p>

                    </article>
                </div>

                <div className='col data'>
                    <Form href="#" />
                </div>
            </div>
        </section>
    )

}

export default DesktopForm