import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div>
      <h3>Your cart is empty!</h3>
      <p>Please check our <Link to='/products'>products</Link></p>
    </div>
  )
}

export default EmptyCart
