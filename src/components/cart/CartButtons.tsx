import { useAppDispatch } from '../../app/hooks'
import { emptyCart } from '../../features/cart/cart.slice'

function CartButtons() {
  const dispatch = useAppDispatch()

  return (
    <div className="button-container">
    <button
      className="button clear-cart"
      onClick={() => dispatch(emptyCart())}
    >
      Clear Cart
    </button>
    <button className="button to-checkout" disabled>To Checkout</button>
  </div>
  )
}

export default CartButtons
