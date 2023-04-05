import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { useAppDispatch } from '../../app/store'
import { emptyCart } from '../../features/cart/cart.slice'
import CartItem from './CartItem'

function Cart() {
  const { cartItems, total } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  return (
    <section className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length > 0
        ? (<div>
      {cartItems.map(item => (<CartItem key={item.id} {...item} />))}
      <p className='total'>Total: { total.toFixed(2) } $</p>
      <div className='button-container'>
        <button
          className='button clear-cart'
          onClick={() => dispatch(emptyCart())}
        >
          Clear Cart
        </button>
        <button className='button to-checkout' disabled>To Checkout</button>
      </div>
      </div>)
        : (<h3>Your cart is empty!</h3>)}
    </section>
  )
}

export default Cart
