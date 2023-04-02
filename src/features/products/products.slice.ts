import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { getProducts } from './products.thunks'

export interface Product {
  id: string
  title: string
  price: number
  description: string
  thumbnail: string
  images: string
}

interface ProductsState {
  products: Product[]
  isLoading: boolean
}

const initialState: ProductsState = {
  products: [],
  isLoading: true,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.products = payload
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export function selectProducts(state: RootState) {
  return state.products
}

export default productsSlice.reducer
