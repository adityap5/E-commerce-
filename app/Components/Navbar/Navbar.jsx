"use client"
import React, { useState } from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import Image from 'next/image'
const Navbar = () => {   
    const [menu, setmenu] = useState("shop") 
  return (
    <>
<div className="navbar">
<div className="logo">
<Image
      src={logo}
      alt="logo"
    />
    <p>acult</p>
</div>
<ul className="menu">
    <li onClick={()=>{setmenu("shop")}}>Shop{menu === "shop"? <hr />:<></>} </li>
    <li onClick={()=>{setmenu("mens")}}>Mens {menu === "mens"? <hr />:<></>}</li>
    <li onClick={()=>{setmenu("womens")}}>Womens {menu === "womens"? <hr />:<></>}</li>
    <li onClick={()=>{setmenu("kids")}}>Kids {menu === "kids"? <hr />:<></>}</li>

</ul>
<div className="navbar-btn"> 
<button>Log In</button>
<Image
      src={cart_icon}
    
      alt="cart"
    />
    <div className="carticon">0</div>
</div>
</div>
    </>
  )
}

export default Navbar
