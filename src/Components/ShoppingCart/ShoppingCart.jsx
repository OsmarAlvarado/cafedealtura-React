import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import ShoppingProduct from '../ShoppingProduct/ShoppingProduct'
import TotalDetail from '../TotalDetail/TotalDetail'
import './ShoppingCart.css'



const ShoppingCart = () => {

    const { showcart, setShowCart, cartItems, setCartItems, total, productsLength } = useContext(DataContext)

    // const [shipping, setShipping] = useState('GRATIS')
    // const [quanty, setQuanty] = useState(0)


    return (

        <section className='shoppingBox'>
            <h2 className='shop'>Cesta ({productsLength})</h2>
            <div className='row frame'>
                <div className='producTable'>
                    <h3>Productos</h3>
                    <div>
                        <ShoppingProduct />
                        <hr />
                    </div>
                    <h3 className='SelectSend'>Seleccionar envío</h3>
                    <div className='shipping'>
                        <div>
                            <input type="radio" id='' name='shippingMethod' value="0" defaultChecked />
                        </div>
                        <div className='sendDetails'>
                            <p className='sendDays'>Envío 5-7 días</p>
                            <p className='sendStandard'>Opción estándar sin seguimiento</p>
                        </div>
                        <div className='price'>
                            <p className='free'><span>GRATIS</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='shipping'>
                        <div>
                            <input type="radio" id="choice2" name="shippingMethod" value="15" />
                        </div>

                        <div className="sendDetailsUrgent">
                            <p className="sendUrgent">Envío urgente 24h</p>
                            <p className="send24h">Recibe tu pedido en las siguientes 24h (Para pedidos realizados
                                antes de las 13:00).
                            </p>
                        </div>
                        <div className="price">
                            <p><span>9.00 €</span></p>
                        </div>
                    </div>
                </div>

                <div className='totalShopp'>
                    <TotalDetail />
                </div>
            </div>
        </section>
    )


}

export default ShoppingCart
