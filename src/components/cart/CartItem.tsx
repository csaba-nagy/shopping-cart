import { useAppDispatch } from '../../app/hooks'
import { changeAmount, removeItemFromCart } from '../../features/cart/cart.slice'
import type { CartItemType } from '../../features/cart/types'

function CartItem({ id, title, price, amount, thumbnail }: CartItemType) {
  const dispatch = useAppDispatch()

  return (
    <article className="cart-item">
      <div className="cart-item-description">
        <img className="cart-item-img" src={thumbnail} alt={title} />
        <div>
          <p className="cart-item-name">{ title }</p>
          <p className="cart-item-price">{price}$</p>
        </div>
      </div>
      <div className="amount-container">
        <button
          type="button"
          className="amount-button increase"
          onClick={() => dispatch(changeAmount({ id, method: 'increase' }))}
          >+</button>
        <p className="cart-item-amount">{ amount }</p>
        <button
          type="button"
          className="amount-button decrease"
          onClick={() => dispatch(amount === 1
            ? removeItemFromCart({ id })
            : changeAmount({ id, method: 'decrease' }))}
          >-</button>
      </div>
      </article>
  )
}

export default CartItem
