import './FeatureSection.css'
import IconArrow from '../Image/Icon arrow.png'
import Bar from '../Image/bar.png'

const FeatureSection = (props) => {

    return (
        <section id='section5'>
            <div className='row bar'>
                <article className='col text'>
                    <h2>{props.titleH2}</h2>
                    <p>{props.paragraph}</p>
                    <article className='link get'>
                        <a className='' href={props.href}>{props.link}</a>
                        <img src={IconArrow} alt={props.icon} />
                    </article>
                </article>

                <article className='col visit'>
                    <img src={Bar} alt={props.photoBar} />
                </article>
            </div>
        </section>
    )

}

export default FeatureSection