import React from 'react'
import { useAppDispatch } from '../../app/store'
import { addToCart } from '../../features/cart/cart.slice'
import type { Product } from '../../features/products/products.slice'

function ProductPanel({ id, title, price, thumbnail }: Product) {
  const dispatch = useAppDispatch()
  return (
    <article className='product-panel'>
      <img src={thumbnail} alt={title} />
      <div className='name-and-price-panel'>
        <h3>{title}</h3>
        <p className='price'>{price} $</p>
      </div>
      <div className='button-container'>
        <button
          className='button add-cart'
          onClick={() => dispatch(addToCart({ id, amount: 1, title, price, thumbnail }))}
          >Add to Cart</button>
        <button className='button read-more'>Read more</button>
      </div>
    </article>
  )
}

export default ProductPanel
