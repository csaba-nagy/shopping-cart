import React from 'react'
import { useAppSelector } from '../../app/hooks'
import ProductPanel from './ProductPanel'

function ProductList() {
  const { products, isLoading } = useAppSelector(state => state.products)

  const setContent = () => {
    if (isLoading) {
      return (
        <div>
          <h2>loading...</h2>
        </div>
      )
    }

    return (
    <div className="product-list">
      <div className='product-container'>
        {products.map(product => (<ProductPanel {...product} key={product.id} />))}
      </div>
    </div>
    )
  }

  return (
    <section>
      <h2>Products</h2>
      {setContent()}
    </section>
  )
}

export default ProductList
