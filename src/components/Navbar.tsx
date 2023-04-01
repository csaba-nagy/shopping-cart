import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/products' className='navbar-link'>Products</Link>
      <Link to='/cart' className='navbar-link'>Cart(0)</Link>
    </nav>
  )
}

export default Navbar
