import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext'
import './Cart.css'

const Cart = () => {

    const { showCart, setShowCart, cartItems, setCartItems, total } = useContext(DataContext)

    const toogleShowCart = () => {
        setShowCart(!showCart)
    }



    const showShoppingCart = showCart ? "shoppingCartShow" : "shoppingCart"

    const plus = (id) => {
        cartItems.forEach((product) => {
            if (product._id === id) {
                product.amount += 1
            }
            setCartItems([...cartItems])
        });
    }

    const minus = (id) => {
        cartItems.forEach((product) => {
            if (product._id === id) {
                product.amount === 1 ? deleteProduct(product._id) : product.amount -= 1
            }
            setCartItems([...cartItems])
        })

    }

    const deleteProduct = (id) => {
        if (window.confirm("Deseas eliminar el producto?")) {
            cartItems.forEach((product, index) => {
                if (product._id === id) {
                    product.amount = 1
                    cartItems.splice(index, 1)
                }
            })
            setCartItems([...cartItems])
        }
    }

    return (

        <div className={showShoppingCart} id='products-id'>
            <br/>
            <p className='close-btn' onClick={() => toogleShowCart()} >X</p>
            <div className='car-header'>
                <h2 className='header-title'>Mi carrito</h2>
                <br/>
                {cartItems.length === 0 ? (<h2>Cesta vacia</h2>) :

                    cartItems.map(product => (
                        <div className='item' key={product._id}>
                            <img alt={product.brand} src={product.img_url} />
                            <h3>{product.brand}</h3>
                            <p className='cart-price'>{product.price.toFixed(2)}€</p>
                            <span className="rest" onClick={() => minus(product._id)}> - </span>
                            <p className='quanty'>{product.amount}</p>
                            <span className="summation" onClick={() => plus(product._id)}> + </span>
                            <h4 className='subT'>Subtotal: {(product.price.toFixed(2) * product.amount.toFixed(2)).toFixed(2)}€</h4>
                            <span className="delete-product" onClick={() => deleteProduct(product._id)}>X</span>
                        </div>
                    ))
                }

            </div>

            {cartItems.length !== 0 ?
                <div className='cartFooter'>
                    <h3 className='price-total'>Total: {total.toFixed(2)} €</h3>
                    <h5 className='iva-incluyed'>Incluye {(total.toFixed(2) * 0.21).toFixed(2)} € de IVA</h5>
                    <Link to="/cesta" className='btn' onClick={toogleShowCart}>Tramitar pedido</Link>
                </div> : ''
            }
        </div>

    )

}

export default Cart