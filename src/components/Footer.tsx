import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectTotal } from '../features/cart/cart.selectors'

function Footer() {
  const total = useAppSelector(selectTotal)
  return (
    <footer>
      <p>Total: { total.toFixed(2) } $</p>
    </footer>
  )
}

export default Footer
