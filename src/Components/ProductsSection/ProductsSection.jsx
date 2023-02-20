import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext';
import ProductCard from '../ProductCard/ProductCard'
import './ProductsSection.css'



const ProductsSection = (props) => {

    const { title, showProducts, alt, href, link, src, id } = props

    const { data } = useContext(DataContext)
    const sortDataByPrice = data.sort((a, b) => a.price - b.price, 0)

    sortDataByPrice.map((product) => {

        if (!product.available) {
            sortDataByPrice.splice(sortDataByPrice.indexOf(product), 1)
            return sortDataByPrice.push(product)
        }
    })

    return (

        <section id={id}>
            <h2>{title}</h2>
            <div >
                {<ProductCard href='#' id='bags' products={sortDataByPrice} showProducts={showProducts} />}
            </div>
            <article className='arrow'>
                <Link to={'/Store'} className='See' href={href}>
                    {link} <img src={src} alt={alt} />
                </Link>
            </article>
        </section>
    )

}

export default ProductsSection