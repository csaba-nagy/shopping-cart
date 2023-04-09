import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { useAppSelector } from './app/hooks'
import { useAppDispatch } from './app/store'
import Cart from './components/cart/Cart'
import ProductList from './components/products/ProductList'
import Welcome from './components/Welcome'
import { calculateTotals } from './features/cart/cart.slice'
import './styles/App.css'

function App() {
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector(state => state.cart)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

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
