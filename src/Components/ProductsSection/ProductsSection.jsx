import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext';
import IconArrow from '../Image/Icon arrow.png'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsSection.css'



const ProductsSection = (props) => {

    const { title, showProducts, alt, href } = props

    const { data } = useContext(DataContext)
    const sortDataByPrice = data.sort((a, b) => a.price - b.price, 0)

    sortDataByPrice.map((product) => {

        if (!product.available) {
            sortDataByPrice.splice(sortDataByPrice.indexOf(product), 1)
            return sortDataByPrice.push(product)
        }
    })

    return (

        <section id='section3'>
            <h2>{title}</h2>
            <ProductCard href='#' products={sortDataByPrice} showProducts={showProducts} />
            <article className='arrow'>
                <Link to={'/Store'} className='See' href={href}>
                    Ver todos
                </Link>
                <img src={IconArrow} alt={alt} />
            </article>

        </section>
    )

}

export default ProductsSection