
import Buttons from '../Buttons/Buttons'
import './Hero.css'
import frutsImage from './../Image/frutas.png'


const Hero = (props) => {



    return (

        <section className='section1'>
            <div className='row wrapper'>
                <article className='col txt'>
                    <h3 className='t3'>{props.titleOne}</h3>
                    <h1 className='t1'>{props.titleTwo}</h1>
                    <p className='p1'>{props.titleThree}</p>
                    
                    <article className='button-wrapper'>
                        <Buttons classButton='discover' nameButton='Descubrir origenes'></Buttons>
                        <Buttons classButton='pay' nameButton='Comprar café'></Buttons>
                    </article>

                </article>

                <article className='col pic'>

                    <img src={frutsImage} alt={props.altName} />

                </article>
            </div>
        </section>
    )

}

export default Hero