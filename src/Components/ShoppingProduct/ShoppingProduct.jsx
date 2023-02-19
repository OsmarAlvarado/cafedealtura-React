import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import './ShoppingProduct.css'
import VectorMinus from '../Image/Vector minus.png'
import VectorPlus from '../Image/Vector plus.png'


const ShoppingProduct = () => {
    const { cartItems, setCartItems, total } = useContext(DataContext)

    const plus = (id) => {
        cartItems.forEach((product) => {
            if (product._id === id) {
                product.amount += 1
            }
            setCartItems([...cartItems])
        })
        console.log('aqui sumo')
    }

    const minus = (id) => {
        cartItems.forEach((product) => {
            if (product._id === id) {
                product.amount === 1 ? removeProduct(product._id) : product.amount -= 1
            }
            setCartItems([...cartItems])
        })
        console.log('aqui estoy')
    }

    const removeProduct = (id) => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
            cartItems.forEach((product, index) => {
                if (product._id === id) {
                    product.amount = 1
                    cartItems.splice(index, 1)
                }
            })
            setCartItems([...cartItems])
        }
        console.log('aqui borro')
    }

    return (


        <div>
            {
                cartItems.length === 0 ? (<h2 className='empty'>Cesta Vacia</h2>) :
                    cartItems.map(product => (
                        <div className='viewProducts' key={product._id}>
                            <div className='counter'>
                                <div className='minus-input'>
                                    <img onClick={() => minus(product._id)} className='minus' name={product.id} src={VectorMinus} alt="" />
                                </div>
                                <div className='number-input'>
                                    <p className='addQuantity'>{product.amount}</p>
                                </div>
                                <div className='plus-input'>
                                    <img onClick={() => plus(product._id)} className='plus' src={VectorPlus} alt="" />
                                </div>
                            </div>
                            <div className='coffeBag'>
                                <img className='itemImg' src={product.img_url} alt="" />
                            </div>
                            <div className='item-content'>
                                <p className='item-title'>{product.brand}</p>
                                <p className='cart-price'>Precio: {product.price.toFixed(2)} €</p>
                            </div>
                            <div className='title-details'>
                                <h3 className=''> {(product.price * product.amount).toFixed(2)} €</h3>
                            </div>
                            <p className='delete-product' onClick={() => removeProduct(product._id)} id={product._id}>X</p>
                        </div>
                    ))
            }
        </div>

    )

}

export default ShoppingProduct