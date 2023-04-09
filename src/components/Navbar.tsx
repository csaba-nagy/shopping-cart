import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectAmount } from '../features/cart/cart.selectors'

function Navbar() {
  const amount = useAppSelector(selectAmount)
  return (
    <nav className="navbar">
      <Link to="/products" className="navbar-link">Products</Link>
      <Link to="/cart" className="navbar-link">Cart({ amount })</Link>
    </nav>
  )
}

export default Navbar
