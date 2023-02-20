import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { DataContext } from '../../Context/DataContext'
import Buttons from '../Buttons/Buttons'
import './ProductCard.css'

const ProductCard = (props) => {

    const { data, addItemToCart } = useContext(DataContext)

    const { products, showProducts, href, id } = props

    return (
        <div id={id} >
            {products.slice(0, showProducts).map((product) => (
                <article className={product.available ? 'col' : "notAvailable"} key={product._id} >
                    <img className='image-cart' alt={product.brand} src={product.img_url} />
                    <a className="country" href={href}>{product.brand}</a>
                    <p className="price"> {product.price.toFixed(2)}€</p>
                    <Buttons classButton="Add" nameButton="Añadir" click={() => addItemToCart(product)} />
                </article>
            ))}
        </div>
    )
}

export default ProductCard