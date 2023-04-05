import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

function Navbar() {
  const { amount } = useAppSelector(state => state.cart)
  return (
    <nav className='navbar'>
      <Link to='/products' className='navbar-link'>Products</Link>
      <Link to='/cart' className='navbar-link'>Cart({ amount })</Link>
    </nav>
  )
}

export default Navbar
