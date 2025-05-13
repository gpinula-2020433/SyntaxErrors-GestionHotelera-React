import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <a href="/" className='logo'>Logo</a>

        <nav className='navbar'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Destinations</a>
            <a href="/">Contact</a>
        </nav>

        <a href="/" className='sign'>SIGN IN</a>
    </header>
  )
}

export default Navbar