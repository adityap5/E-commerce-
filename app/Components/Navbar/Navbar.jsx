import React from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {    
  return (
    <>
<div className="navbar">
<div className="logo">
    <img src={logo} alt="logo" />
    <p>acult</p>
</div>
<ul>
    <li>Shop</li>
    <li>Mens</li>
    <li>Womens</li>
    <li>Kids</li>

</ul>
<div className="navbar-btn"> 
<button>Log In</button>
<img src="{cart_icon}" alt="cart" />
</div>
</div>
    </>
  )
}

export default Navbar
