import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext'
import Buttons from '../Buttons/Buttons'
import './TotalDetail.css'


const TotalDetail = ({ shipment }) => {

    const { total } = useContext(DataContext)

    return (
        <div>
            <div className='detailsTotal'>
                <h3 className=''>Total del carrito</h3>
                <hr />
                <div className='detailsSub'>
                    <p className='subtotal'>SUBTOTAL</p>
                    <p className='subtotalNum'> {total.toFixed(2)} €</p>
                </div>
                <div className='sendDet'>
                    <p className='send'>ENVÍO</p>
                    <p className='sendFree'><span>{shipment === 0 ? 'GRATIS' : shipment.toFixed(2)}</span></p>
                </div>
                <hr />
                <div className='totalCart'>
                    <p className='tot'>TOTAL</p>
                    <div className='plusIva'>
                        <p className='totalFix'> {(total + shipment).toFixed(2)} €</p>
                        <p className='incluyedIva'>Incluye {(total * 0.21).toFixed(2)} € de IVA</p>
                    </div>
                </div>
            </div>
            <br />
            <div className='buttonWrapper'>
                <Link to='/Checkout' className='goToCheck'>Ir a checkout</Link>
                <Link to='/Store' className='continueShop'>Seguir comprando</Link>
                {/* <Buttons  classButton='goToCheck' alt='' nameButton='Ir a checkout' /> */}
                {/* <Buttons classButton='continueShop' alt='' nameButton='Seguir comprando' /> */}
            </div>
        </div>
    )
}


export default TotalDetail