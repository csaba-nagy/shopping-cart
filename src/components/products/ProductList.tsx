import { useMemo } from 'react'
import { useAppSelector } from '../../app/hooks'
import ProductPanel from './ProductPanel'

function ProductList() {
  const { products, isLoading, error } = useAppSelector(state => state.products)

  const setContent = useMemo(() => {
    if (error.message) {
      return (
        <div className="error-container">
          <p className="error-status">{error.status}</p>
          <p className="error-message">{ error.message }</p>
        </div>
      )
    }

    if (isLoading) {
      return (
        <div>
          <h2>loading...</h2>
        </div>
      )
    }

    return (
    <div className="product-list">
      <div className="product-container">
        {products.map(product => (<ProductPanel {...product} key={product.id} />))}
      </div>
    </div>
    )
  }, [error, isLoading, products])

  return (
    <section>
      <h2>Products</h2>
      {setContent}
    </section>
  )
}

export default ProductList
