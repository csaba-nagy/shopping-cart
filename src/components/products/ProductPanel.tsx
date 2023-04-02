import React from 'react'
import type { Product } from '../../features/products/products.slice'

function ProductPanel({ title, price, thumbnail }: Product) {
  return (
    <article className='product-panel'>
      <img src={thumbnail} alt={title} />
      <div className='name-and-price-panel'>
        <h3>{title}</h3>
        <p className='price'>{price} $</p>
      </div>
      <div className='button-container'>
        <button className='button add-cart'>Add to Cart</button>
        <button className='button read-more'>Read more</button>
      </div>
    </article>
  )
}

export default ProductPanel
