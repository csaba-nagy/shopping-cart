import { useCallback } from 'react'

import { useAppDispatch } from '../../app/hooks'
import { changeAmount, removeItemFromCart } from '../../features/cart/cart.slice'
import type { CartItemType } from '../../features/cart/types'

function CartItem({ id, title, price, amount, thumbnail }: CartItemType) {
  const dispatch = useAppDispatch()

  const onClickDecrement = useCallback(() => {
    if (amount === 1)
      return dispatch(removeItemFromCart({ id }))

    dispatch(changeAmount({ id, method: 'decrease' }))
  }, [amount, dispatch, id])

  const onClickIncrement = useCallback(() => {
    dispatch(changeAmount({ id, method: 'increase' }))
  }, [dispatch, id])

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
          onClick={ onClickIncrement }
          >+</button>
        <p className="cart-item-amount" role="amount">{ amount }</p>
        <button
          type="button"
          className="amount-button decrease"
          onClick={ onClickDecrement }
          >-</button>
      </div>
      </article>
  )
}

export default CartItem
