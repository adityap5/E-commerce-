import React from 'react'
import './Footer.css'
import Image from 'next/image'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
<Image src={footer_logo} alt="footerlogo"/>
<p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <Image src={instagram_icon} alt="instagram"/>
       
      </div>
      
        <div className="footer-icons-container">
            <Image src={pintester_icon} alt="instagram"/>
            </div>
        <div className="footer-icons-container">

            <Image src={whatsapp_icon} alt="instagram"/>
      
            </div>
      
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
