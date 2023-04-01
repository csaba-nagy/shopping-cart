import { Route, Routes } from 'react-router'
import Cart from './components/cart/Cart'
import ProductList from './components/products/ProductList'
import Welcome from './components/Welcome'
import './styles/App.css'

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/products' element={<ProductList />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </main>
  )
}

export default App
