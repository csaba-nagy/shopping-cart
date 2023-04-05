import React from 'react'
import { useAppSelector } from '../app/hooks'

function Footer() {
  const { total } = useAppSelector(state => state.cart)
  return (
    <footer>
      <p>Total: { total.toFixed(2) } $</p>
    </footer>
  )
}

export default Footer
