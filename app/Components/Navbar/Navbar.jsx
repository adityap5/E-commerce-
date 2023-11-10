"use client"
import React, { useState } from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import Image from 'next/image'
import { Link } from 'react-router-dom'
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
    <li onClick={()=>{setmenu("shop")}}><Link to="/" style={{textDecoration:'none' ,color:'grey' }}>Shop</Link>{menu === "shop"? <hr />:<></>} </li>
    <li onClick={()=>{setmenu("mens")}}><Link to="/mens" style={{textDecoration:'none' ,color:'grey' }}>Mens</Link>  {menu === "mens"? <hr />:<></>}</li>
    <li onClick={()=>{setmenu("womens")}}><Link to="/womens" style={{textDecoration:'none' ,color:'grey' }}>Womens</Link>  {menu === "womens"? <hr />:<></>}</li>
    <li onClick={()=>{setmenu("kids")}}><Link to="/kids" style={{textDecoration:'none' ,color:'grey' }}>Kids</Link>   {menu === "kids"? <hr />:<></>}</li>

</ul>
<div className="navbar-btn"> 
<Link to ='/login'><button>Log In</button></Link>
<Link to ='/cart'><Image
      src={cart_icon}
      alt="cart"
    /></Link>
    <div className="carticon">0</div>
</div>
</div>
    </>
  )
}

export default Navbar
