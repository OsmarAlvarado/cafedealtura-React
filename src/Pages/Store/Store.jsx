import React from 'react'
import CardsOne from '../../Components/CardsOne/CardsOne'
import Footer from '../../Components/Footer/Footer'
import ProductsSection from '../../Components/ProductsSection/ProductsSection'
import './Store.css'


const Store =()=>{

    return(
        <div className='Store'>
            <ProductsSection id='section' title='Últimos origenes' link="" />
            <CardsOne />
            <Footer />
        </div>
    )

}

export default Store