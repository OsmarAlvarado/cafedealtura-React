import './CardReport.css'

const CardReport = (props) => {

    return (
        <article className='col box'>
            <img src={props.img} alt={props.nameAlt} />
            <h3 className='order'>{props.title}</h3>
            <p className={props.classParagraph}>{props.parraph}</p>
        </article>
    )

}

export default CardReport