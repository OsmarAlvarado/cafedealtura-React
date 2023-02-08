import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ApiURL = 'https://cafe-de-altura-api.vercel.app/api/products';

const DataContext = createContext()

const DataContextProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(true)
    const [showCart, setShowCart] = useState(false)
    const [productsLength, setProductsLength] = useState(0)
    const [total, setTotal] = useState(0)

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productsLS = localStorage.getItem('cartProducts')
            return productsLS ? JSON.parse(productsLS) : []
        } catch (error) {
            return []
        }
    })

    useEffect(() => {
        axios
            .get(ApiURL)
            .then((response) => {
                setData(response.data.products)
                setFetching(false)
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        setProductsLength(cartItems.reduce((previous, current) => previous + current.amount, 0))
        setTotal((cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)))
    }, [cartItems])


    const addItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart._id === product._id)

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart._id === product._id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart
                })
            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }
    }

    const deleteItemFromCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart._id === product._id)

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart => productInCart._id !== product._id))
            )
        } else {
            setCartItems((productInCart) => {
                if (productInCart._id === product._id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productInCart
            })
        }
    }

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems])


    return (
        <DataContext.Provider
            value={{ data, fetching, showCart, setShowCart, addItemToCart, deleteItemFromCart, cartItems, setCartItems, productsLength, total }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataContextProvider }
