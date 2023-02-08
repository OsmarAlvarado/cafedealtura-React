import { BoxIconElement } from 'boxicons'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext'
import './Cart.css'

const Cart = () => {

    const { showCart, setShowCart, cartItems, setCartItems, total } = useContext(DataContext)

    const toogleShowCart = () => {
        setShowCart(!showCart)
    }

    const showShoppingCartBox = showCart ? "shoppingCartsShow" : "shoppingCarts"
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
        <div className={showShoppingCartBox} id=''>

            <div className={showShoppingCart} id=''>
                <p className='' onClick={toogleShowCart} >X</p>
                <div className=''>
                    <h2 className=''>Mi carrito</h2>
                    {cartItems.length === 0 ? (<h2 style={{ textAlign: "center", fontSize: "3rem" }}>Cesta vacia</h2>) :

                        cartItems.map(product => (
                            <div className='' key={product._id}>
                                <img alt={product.brand} src={product.img_url} />
                                <h3>{product.brand}</h3>
                                <p className='price'>{product.price.toFixed(2)} €</p>
                                <span class="rest" onClick={() => minus(product._id)}> - </span>
                                <p className='quanty'>{product.amount}</p>
                                <span class="summation" onClick={() => plus(product._id)}> - </span>
                                <h4>Subtotal: {(product.price.toFixed(2) * product.amount.toFixed(2)).toFixed(2)} €</h4>
                                <span class="delete-product" onClick={() => deleteProduct(product._id)}> X </span>
                            </div>
                        ))
                    }

                </div>

                {cartItems.length !== 0 ?
                    <div className=''>
                        <h3>Total: {total.toFixed(2)} €</h3>
                        <h5>Incluye {(total.toFixed(2) * 0.21).toFixed(2)} € de IVA</h5>
                        <Link to="/cesta" className='btn' onClick={toogleShowCart}>Tramitar pedido</Link>
                    </div> : ''
                }
            </div>
        </div>
    )

}

export default Cart