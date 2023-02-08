import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [shipping, setShipping] = useState(0)

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productsLS = localStorage.getItem('cartProducts')
            return productsLS ? JSON.parse(productsLS) : []

        } catch (error) {
            return []
        }

    })

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))

    }, [cartItems])

    const addItemToCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id)

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart

                })
            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }

    }

    const deleteItemFromCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id)

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart => productInCart.id !== product.id))
            )
        } else {
            setCartItems((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productInCart
            })
        }
    }

    return (
        <CartContext.Provider
            value={{ cartItems, setCartItems, addItemToCart, deleteItemFromCart, shipping, setShipping }}
        >
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartContextProvider }