import React from 'react'
import { useAppSelector } from '../../app/hooks'
import CartButtons from './CartButtons'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

function Cart() {
  const { cartItems, total } = useAppSelector(state => state.cart)

  return (
    <section className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length > 0
        ? (<div>
            {cartItems.map(item => (<CartItem key={item.id} {...item} />))}
            <p className='total'>Total: { total.toFixed(2) } $</p>
            <CartButtons />
          </div>)
        : <EmptyCart />}
    </section>
  )
}

export default Cart
