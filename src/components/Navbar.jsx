import React from 'react'
import Logo from '../assets/logo.png'
import '../assets/navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <header>
        <span className='navbar-links'>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/credits">Credits</Link>
        </span>
        <img src={Logo} className='logo' />
    </header>
  )
}

export default Navbar;