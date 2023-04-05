import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { getProducts } from './products.thunks'
import type { ProductsState } from './types'

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
