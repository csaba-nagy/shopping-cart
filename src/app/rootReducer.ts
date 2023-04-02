import { combineReducers } from '@reduxjs/toolkit'
import productsReducer from '../features/products/products.slice'

const rootReducer = combineReducers({
  products: productsReducer,
})

export default rootReducer
