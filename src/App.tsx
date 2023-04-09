import { useEffect } from 'react'
import { Route, Routes } from 'react-router'

import { useAppDispatch, useAppSelector } from './app/hooks'
import Cart from './components/cart/Cart'
import ProductList from './components/products/ProductList'
import Welcome from './components/Welcome'
import { selectCartItems } from './features/cart/cart.selectors'
import { calculateTotal } from './features/cart/cart.slice'
import { getProducts } from './features/products/products.thunks'
import './styles/App.css'

function App() {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItems)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </main>
  )
}

export default App
