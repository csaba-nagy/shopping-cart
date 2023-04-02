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
  error?: ErrorInterface
}

export interface ErrorInterface {
  status?: number
  message: string
}

const initialState: ProductsState = {
  products: [],
  isLoading: true,
  error: undefined,
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
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
  },
})

export function selectProducts(state: RootState) {
  return state.products
}

export default productsSlice.reducer
