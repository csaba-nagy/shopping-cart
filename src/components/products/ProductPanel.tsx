import { useCallback } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addToCart } from '../../features/cart/cart.slice'
import type { Product } from '../../features/products/types'

interface ProductPanelProps extends Product {}

function ProductPanel({ id, title, price, thumbnail }: ProductPanelProps) {
  const dispatch = useAppDispatch()

  const onClickAddToCart = useCallback(() => {
    dispatch(addToCart({ id, amount: 1, title, price, thumbnail }))
  }, [dispatch, id, title, price, thumbnail])

  return (
    <article className="product-panel">
      <img src={thumbnail} alt={title} />
      <div className="name-and-price-panel">
        <h3>{title}</h3>
        <p className="price">{price} $</p>
      </div>
      <div className="button-container">
        <button
          className="button add-cart"
          onClick={ onClickAddToCart }
          >Add to Cart</button>
        <button className="button read-more">Read more</button>
      </div>
    </article>
  )
}

export default ProductPanel
