import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import FooterWrapper from '../FooterWrapper/FooterWrapper'

import './Footer.css'


const Footer = () => {

    return (
        <footer>
            <FooterWrapper iconBowl='icon bowl' href='#' />
            <br />
            <br />
            <br />
            <CopyrightFooter href='#' />
        </footer>
    )
}

export default Footer