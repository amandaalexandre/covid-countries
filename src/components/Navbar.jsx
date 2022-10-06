import React from 'react'
import Logo from '../assets/logo.png'
import '../assets/navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {

  let activeLink = 'navbar-link-active';
  let unactiveLink = 'navbar-link';

  return (
    <header>
        <span className='navbar-links'>
          <NavLink to="/" end className={({ isActive }) =>
              isActive ? activeLink : unactiveLink}>Home</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) =>
              isActive ? activeLink : unactiveLink}>Dashboard</NavLink>
          <NavLink to="/credits" className={({ isActive }) =>
              isActive ? activeLink : unactiveLink}>Credits</NavLink>
        </span>
        <img src={Logo} className='logo' />
    </header>
  )
}

export default Navbar;