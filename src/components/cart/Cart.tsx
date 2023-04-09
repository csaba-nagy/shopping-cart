import { useAppSelector } from '../../app/hooks'
import { selectCartItems, selectHasCartItem, selectTotal } from '../../features/cart/cart.selectors'
import CartButtons from './CartButtons'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

function Cart() {
  const cartItems = useAppSelector(selectCartItems)
  const total = useAppSelector(selectTotal)
  const hasCartItem = useAppSelector(selectHasCartItem)

  if (!hasCartItem) {
    return (
      <section className="cart">
        <h2>Your cart</h2>
        <EmptyCart />
      </section>
    )
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div>
        {cartItems.map(item => (<CartItem key={item.id} {...item} />))}
        <p className="total">Total: { total.toFixed(2) } $</p>
        <CartButtons />
      </div>
    </section>
  )
}

export default Cart
