import { combineReducers } from '@reduxjs/toolkit'

import productsReducer from '../features/products/products.slice'
import cartReducer from '../features/cart/cart.slice'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})

export default rootReducer
